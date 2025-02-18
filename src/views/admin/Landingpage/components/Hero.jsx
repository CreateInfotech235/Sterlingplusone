import { useState, useEffect } from "react";
import { GetHero, HeroPost } from "../../Api/Hero";
import { fileToBase64 } from "../../Api/Convertbase64";

const Hero = () => {
  const [heroData, setHeroData] = useState({
    heroSectionData: {
      title: "",
      subTitle: "",
      description: "",
      bgImage: "",
      button: {
        name: "",
        link: ""
      },
      marqueeList: [{ name: "", icon: "" }]
    }
  });
  console.log(heroData, "heroData");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroData = async () => {
    try {
      setLoading(true);
      const response = await GetHero();
      if (response && response[0]) {
        setHeroData(response[0]);
      }
    } catch (err) {
      setError("Failed to fetch hero data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  const handleInputChange = (e, section, value) => {
    if (section === "button") {
      setHeroData({
        ...heroData,
        heroSectionData: {
          ...heroData.heroSectionData,
          button: {
            ...heroData.heroSectionData.button,
            [e.target.name]: e.target.value
          }
        }
      });
    } else {
      if (e.target.name === "bgImage") {
        setHeroData({
          ...heroData,
          heroSectionData: {
            ...heroData.heroSectionData,
            bgImage: value
          }
        });
      } else {
        setHeroData({
          ...heroData,
          heroSectionData: {
            ...heroData.heroSectionData,
            [e.target.name]: e.target.value
          }
        });
      }
    }
  };

  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...heroData.heroSectionData.marqueeList];
    updatedFeatures[index] = {
      ...updatedFeatures[index],
      [field]: value
    };
    setHeroData({
      ...heroData,
      heroSectionData: {
        ...heroData.heroSectionData,
        marqueeList: updatedFeatures
      }
    });
  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleFeatureChange(index, "icon", base64);
      } catch (err) {
        setError("Error converting image to base64");
        console.error(err);
      }
    }
  };

  const handleAddFeature = () => {
    setHeroData({
      ...heroData,
      heroSectionData: {
        ...heroData.heroSectionData,
        marqueeList: [...heroData.heroSectionData.marqueeList, { name: "", icon: "" }]
      }
    });
  };

  const handleRemoveFeature = (index) => {
    const updatedFeatures = heroData.heroSectionData.marqueeList.filter((_, i) => i !== index);
    setHeroData({
      ...heroData,
      heroSectionData: {
        ...heroData.heroSectionData,
        marqueeList: updatedFeatures
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await HeroPost(heroData);
      if (response) {
        alert("Data saved successfully!");
        fetchHeroData();
      }
    } catch (err) {
      setError("Error saving data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = (index) => {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "file";
    hiddenInput.accept = "image/*";
    hiddenInput.onchange = (e) => handleImageUpload(e, index);
    hiddenInput.click();
  };

  if (loading || (!heroData.heroSectionData.title && !heroData.heroSectionData.subTitle)) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4"></div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>

            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center sm:text-left">Hero Section Settings</h1>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title, Subtitle, and Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Content</h2>
            <div className="space-y-4">
              {/* get bg image */}
              <label htmlFor="HeroDataBgImage" className="text-md font-medium text-gray-700">
                bg image
              </label>
              <div className="w-[300px] h-[300px] border-dashed border-2 flex items-center justify-center">
                {heroData.heroSectionData.bgImage ? (
                  <label htmlFor="HeroDataBgImage" className="w-[300px] h-[300px] flex items-center justify-center">
                    <img
                      src={heroData.heroSectionData.bgImage}
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
                      handleInputChange(e, "bgImage", base64);
                    }
                  }}
                  placeholder="Background Image"
                />
              </div>

              <input
                type="text"
                name="title"
                value={heroData.heroSectionData.title}
                onChange={(e) => handleInputChange(e)}
                placeholder="Title"
                className="w-full p-3 border rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subTitle"
                value={heroData.heroSectionData.subTitle}
                onChange={(e) => handleInputChange(e)}
                placeholder="Subtitle"
                className="w-full p-3 border rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={heroData.heroSectionData.description}
                onChange={(e) => handleInputChange(e)}
                placeholder="Description"
                className="w-full p-3 border rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="4"
              />
            </div>
          </div>

          {/* Button Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Button</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={heroData.heroSectionData.button.name}
                onChange={(e) => handleInputChange(e, "button")}
                placeholder="Button Text"
                className="w-full p-3 border rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="text"
                name="link"
                value={heroData.heroSectionData.button.link}
                onChange={(e) => handleInputChange(e, "button")}
                placeholder="Button Link"
                className="w-full p-3 border rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Features</h2>
            {heroData.heroSectionData.marqueeList.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 mb-4 p-4 border rounded-lg"
              >
                <input
                  type="text"
                  value={feature.name}
                  onChange={(e) => handleFeatureChange(index, "name", e.target.value)}
                  placeholder="Feature Name"
                  className="flex-1 p-3 border rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddFeature}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Add Feature
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow hover:bg-green-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
