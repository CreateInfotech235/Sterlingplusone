import { useState, useEffect } from "react";
import { GetAbouttopMain, AbouttopMainPost } from "../../Api/About";
import { fileToBase64 } from "../../Api/Convertbase64";
const AbouttopMain = () => {
  const [aboutData, setAboutData] = useState({
    abouttopAs: {
      title: "",
      subTitle: "", 
bgImage:"",
      button: {
        name: "",
        link: ""
      }
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await GetAbouttopMain();
      console.log(response,"response");
      if (response) {
        setAboutData(response);
      }
    } catch (err) {
      setError("Failed to fetch about data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  const handleInputChange = (e, value) => {
    if (e.target.name === "bgImage") {
      setAboutData(prev => ({
        ...prev,
        abouttopAs: {
          ...prev.abouttopAs,
          bgImage: value
        }
      }));
    } else {
      setAboutData(prev => ({
        ...prev,
        abouttopAs: {
          ...prev.abouttopAs,
          [e.target.name]: e.target.value
        }
      }));
    }
  };

  const handleButtonChange = (e) => {
    const { name, value } = e.target;
    setAboutData(prev => ({
      ...prev,
      abouttopAs: {
        ...prev.abouttopAs,
        button: {
          ...prev.abouttopAs?.button,
          [name]: value
        }
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await AbouttopMainPost(aboutData);
      if (response) {
        alert('Data saved successfully!');
        fetchAboutData();
      }
    } catch (err) {
      setError('Error saving data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse space-y-4 w-full max-w-5xl">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">About Page Hero Settings</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}


        <label htmlFor="HeroDataBgImage" className="text-md font-medium text-gray-700">
                bg image
              </label>
              <div className="w-[300px] h-[300px] border-dashed border-2 flex items-center justify-center">
                {aboutData?.abouttopAs?.bgImage ? (
                  <label htmlFor="HeroDataBgImage" className="w-[300px] h-[300px] flex items-center justify-center">
                    <img
                      src={aboutData?.abouttopAs?.bgImage}
                      alt="Background Image"
                      className="object-cover rounded-lg"
                    />
                  </label>
                ) : (
                  <label htmlFor="HeroDataBgImage" className="w-[300px] h-[300px] border-dashed border-2 flex items-center justify-center">
                    <p>Click to upload</p>
                  </label>
                )}
                <input
                  type="file"
                  name="bgImage"
                  className="hidden"
                  id="HeroDataBgImage"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const base64 = await fileToBase64(file);
                      handleInputChange(e, base64);
                    }
                  }}
                  placeholder="Background Image"
                />
              </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={aboutData?.abouttopAs?.title || ""}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter the title"
          />
        </div>

        {/* Subtitle Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Subtitle</label>
          <input
            type="text"
            name="subTitle"
            value={aboutData?.abouttopAs?.subTitle || ""}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter the subtitle"
          />
        </div>

        {/* Button Settings */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-4">Button Settings</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <div>
              <label className="block text-lg font-medium mb-2">Button Text</label>
              <input
                type="text"
                name="name"
                    value={aboutData?.abouttopAs?.button?.name || ""}
                onChange={handleButtonChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter button text"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Button Link</label>
              <input
                type="text"
                name="link"
                value={aboutData?.abouttopAs?.button?.link || ""}
                onChange={handleButtonChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter button link"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AbouttopMain;
