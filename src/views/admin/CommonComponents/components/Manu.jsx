import { useState, useEffect } from "react";
import { GetManu, ManuPost } from "../../Api/Manu";
import { fileToBase64 } from "../../Api/Convertbase64";
const Manu = () => {
  // State initialization
  const [menuData, setMenuData] = useState({
    logo: {
      img: "",
      path: "",
    },
    menuList: [
      {
        name: "",
        path: "",
      },
    ],
    button: {
      text: "",
      link: "",
    },
    favicon: {
      img: "",
      path: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch menu data from API
  const fetchMenuData = async () => {
    try {
      setLoading(true);
      const response = await GetManu();
      if (response) {
        setMenuData(response);
      }
    } catch (err) {
      setError("Failed to fetch menu data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const handleLogoChange = (field, value) => {
    setMenuData({
      ...menuData,
      logo: {
        ...menuData.logo,
        [field]: value,
      },
    });
  };

  const handleFaviconChange = (field, value) => {
    setMenuData({
      ...menuData,
      favicon: {
        ...menuData.favicon,
        [field]: value,
      },
    });
  };

  const handleMenuItemChange = (index, field, value) => {
    const updatedMenuList = [...menuData.menuList];
    updatedMenuList[index] = {
      ...updatedMenuList[index],
      [field]: value,
    };
    setMenuData({
      ...menuData,
      menuList: updatedMenuList,
    });
  };

  const handleButtonChange = (field, value) => {
    setMenuData({
      ...menuData,
      button: {
        ...menuData.button,
        [field]: value,
      },
    });
  };

  // Logo image upload handler
  const handleLogoImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleLogoChange("img", base64);
      } catch (err) {
        setError("Error converting image to base64");
        console.error(err);
      }
    }
  };

  // Favicon image upload handler
  const handleFaviconImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleFaviconChange("img", base64);
      } catch (err) {
        setError("Error converting image to base64");
        console.error(err);
      }
    }
  };

  // Add new menu item
  const handleAddMenuItem = () => {
    setMenuData({
      ...menuData,
      menuList: [...menuData.menuList, { name: "", path: "" }],
    });
  };

  // Remove menu item
  const handleRemoveMenuItem = (index) => {
    const updatedMenuList = menuData.menuList.filter((_, i) => i !== index);
    setMenuData({
      ...menuData,
      menuList: updatedMenuList,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await ManuPost(menuData);
      if (response) {
        alert("Menu data saved successfully!");
        fetchMenuData();
      }
    } catch (err) {
      setError("Error saving data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Trigger file input for logo
  const triggerLogoFileInput = () => {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "file";
    hiddenInput.accept = "image/*";
    hiddenInput.onchange = handleLogoImageUpload;
    hiddenInput.click();
  };

  // Trigger file input for favicon
  const triggerFaviconFileInput = () => {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "file";
    hiddenInput.accept = "image/*";
    hiddenInput.onchange = handleFaviconImageUpload;
    hiddenInput.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse space-y-8 w-full max-w-5xl">
          {/* Skeleton loading UI */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="flex gap-6">
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Menu Settings</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Logo Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Logo</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div>
                <div
                  onClick={triggerLogoFileInput}
                  className="cursor-pointer w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400"
                >
                  {menuData.logo.img ? (
                    <img
                      src={menuData.logo.img}
                      alt="Logo preview"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">Upload Logo</span>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo Path</label>
                <input
                  type="text"
                    value={menuData?.logo?.path}
                  onChange={(e) => handleLogoChange("path", e.target.value)}
                  className="w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Favicon Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Favicon</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div>
                <div
                  onClick={triggerFaviconFileInput}
                  className="cursor-pointer w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400"
                >
                  {menuData?.favicon?.img ? (
                    <img
                      src={menuData?.favicon?.img}
                      alt="Favicon preview"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">Upload Favicon</span>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Favicon Path</label>
                <input
                  type="text"
                  value={menuData?.favicon?.path}
                  onChange={(e) => handleFaviconChange("path", e.target.value)}
                  className="w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white shadow-lg ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};



export default Manu;
