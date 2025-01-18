import { useState, useEffect } from "react";
import { GetNav, NavPost } from "../../Api/Nav";
import { fileToBase64 } from "../../Api/Convertbase64";

const Nav = () => {
  const [navData, setNavData] = useState({
    title: "",
    icons: [
      {
        Image: "",
        link: ""
      }
    ]
  });

  const [error, setError] = useState(null);

  const fetchNavData = async () => {
    try {
      const response = await GetNav();
      if (response) {
        setNavData(response || navData);
      }
    } catch (err) {
      setError("Failed to fetch navigation data");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNavData();
  }, []);

  const handleInputChange = (e) => {
    setNavData({
      ...navData,
      [e.target.name]: e.target.value
    });
  };

  const handleIconChange = (index, field, value) => {
    const updatedIcons = [...navData.icons];
    updatedIcons[index] = {
      ...updatedIcons[index],
      [field]: value
    };
    setNavData({
      ...navData,
      icons: updatedIcons
    });
  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleIconChange(index, 'Image', base64);
      } catch (err) {
        setError('Error converting image to base64');
        console.error(err);
      }
    }
  };

  const handleAddIcon = () => {
    setNavData({
      ...navData,
      icons: [...navData.icons, { Image: "", link: "" }]
    });
  };

  const handleRemoveIcon = (index) => {
    const updatedIcons = navData.icons.filter((_, i) => i !== index);
    setNavData({
      ...navData,
      icons: updatedIcons
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await NavPost(navData);
      if (response) {
        alert('Data saved successfully!');
        fetchNavData();
      }
    } catch (err) {
      setError('Error saving data');
      console.error(err);
    }
  };

  const triggerFileInput = (index) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'file';
    hiddenInput.accept = 'image/*';
    hiddenInput.onchange = (e) => handleImageUpload(e, index);
    hiddenInput.click();
  };

  if (!navData.title && !navData.icons[0].Image) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4"></div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4"></div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Navigation Settings</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={navData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">Icons</h2>
            {navData.icons.map((icon, index) => (
              <div key={index} className="flex items-center gap-4 mb-4 p-4 border rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Image</label>
                  <div
                    onClick={() => triggerFileInput(index)}
                    className="cursor-pointer border-2 border-dashed border-gray-300 flex items-center justify-center w-20 h-20 rounded-lg overflow-hidden"
                  >
                    {icon.Image ? (
                      <img src={icon.Image} alt="Preview" className="object-cover w-full h-full bg-black" />
                    ) : (
                      <span className="text-gray-400">Upload</span>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Link</label>
                  <input
                    type="text"
                    value={icon.link}
                    onChange={(e) => handleIconChange(index, 'link', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveIcon(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddIcon}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Add Icon
            </button>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
