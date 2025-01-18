import { useState, useEffect } from "react";
import { GetHeroOurServices, HeroOurServicesPost } from "../../Api/HeroOurServices";
import { fileToBase64 } from "../../Api/Convertbase64";

const HeroOurServices = () => {
  const [heroData, setHeroData] = useState({
    heroOurServices: {
      maintitle: "",
      subTitle: "",
      description: "",
      mainImage: "",
      mainVideo: "",
      services: [
        {
          img: "",
          title: "",
          description: "",
          button: {
            name: "",
            link: "",
          },
        },
      ],
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroData = async () => {
    try {
      setLoading(true);
      const response = await GetHeroOurServices();
      if (response) {
        setHeroData(response);
      }
    } catch (err) {
      setError("Failed to fetch hero services data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  const handleInputChange = (e) => {
    setHeroData({
      ...heroData,
      heroOurServices: {
        ...heroData.heroOurServices,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...heroData.heroOurServices.services];
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      updatedServices[index] = {
        ...updatedServices[index],
        [parent]: {
          ...updatedServices[index][parent],
          [child]: value,
        },
      };
    } else {
      updatedServices[index] = {
        ...updatedServices[index],
        [field]: value,
      };
    }

    setHeroData({
      ...heroData,
      heroOurServices: {
        ...heroData.heroOurServices,
        services: updatedServices,
      },
    });
  };

  const handleImageUpload = async (e, index, field, typefile = "image") => {
    const file = e.target.files[0];
    // 10mb
    const MAX_BASE64_LENGTH = 10000000; // Set a maximum length for the base64 string
    console.log("video size", file.size);
    if (file) {
      try {
        const base64 = await fileToBase64(file);
  
        if (base64.length > MAX_BASE64_LENGTH) {
          alert(`The ${typefile === "image" ? "image" : "video"} is too large. Please upload a file less than 10 mb`);
          return;
        }
  
        if (field === "mainImage") {
          setHeroData({
            ...heroData,
            heroOurServices: {
              ...heroData.heroOurServices,
              mainImage: base64,
            },
          });
        } else if (field === "mainVideo") {
          console.log("video size", base64.length);
          setHeroData({
            ...heroData,
            heroOurServices: {
              ...heroData.heroOurServices,
              mainVideo: base64,
            },
          });
        } else {
          handleServiceChange(index, "img", base64);
        }
      } catch (err) {
        setError("Error converting file to base64");
        console.error(err);
      }
    }
  };
  

  const handleAddService = () => {
    setHeroData({
      ...heroData,
      heroOurServices: {
        ...heroData.heroOurServices,
        services: [
          ...heroData.heroOurServices.services,
          {
            img: "",
            title: "",
            description: "",
            button: {
              name: "",
              link: "",
            },
          },
        ],
      },
    });
  };

  const handleRemoveService = (index) => {
    const updatedServices = heroData.heroOurServices.services.filter((_, i) => i !== index);
    setHeroData({
      ...heroData,
      heroOurServices: {
        ...heroData.heroOurServices,
        services: updatedServices,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await HeroOurServicesPost(heroData);
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

  const triggerFileInput = (index, field, typefile = "image") => {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "file";
    hiddenInput.accept = typefile === "image" ? "image/*" : "video/*";
    hiddenInput.onchange = (e) => handleImageUpload(e, index, field, typefile);
    hiddenInput.click();
  };


  if (!heroData.heroOurServices.maintitle && !heroData.heroOurServices.services[0].img) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-48 bg-gray-200 rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <div key={item} className="space-y-4 p-4 border border-gray-200 rounded-lg">
                  <div className="h-48 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-24 bg-gray-200 rounded"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Services Section Settings</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Main Title</label>
            <input
              type="text"
              name="maintitle"
              value={heroData.heroOurServices.maintitle}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              name="subTitle"
              value={heroData.heroOurServices.subTitle}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={heroData.heroOurServices.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Main Video</label>
            <div
              onClick={() => triggerFileInput(null, "mainVideo", "video")}
              className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center hover:border-gray-400"
            >
              {heroData.heroOurServices.mainVideo ? (
                <video
                  src={heroData.heroOurServices.mainVideo}
                  alt="Main Service"
                  className="object-cover w-40 h-40"
                />
              ) : (
                <span className="text-gray-500 text-center">Click to select main video</span>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Services</h3>
            {heroData.heroOurServices.services.map((service, index) => (
              <div key={index} className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm border">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Service Image</label>
                  <div
                    onClick={() => triggerFileInput(index, "img")}
                    className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 flex justify-center items-center hover:border-gray-400"
                  >
                    {service.img ? (
                      <img
                        src={service.img}
                        alt={`Service ${index + 1}`}
                        className="object-cover w-32 h-32"
                      />
                    ) : (
                      <span className="text-gray-500 text-center">Click to select image</span>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block font-semibold text-gray-700 mb-2">Service Title</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block font-semibold text-gray-700 mb-2">Service Description</label>
                  <textarea
                    value={service.description}
                    onChange={(e) => handleServiceChange(index, "description", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                  />
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Button</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={service.button.name}
                      onChange={(e) => handleServiceChange(index, "button.name", e.target.value)}
                      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Button Text"
                    />
                    <input
                      type="text"
                      value={service.button.link}
                      onChange={(e) => handleServiceChange(index, "button.link", e.target.value)}
                      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Button Link"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveService(index)}
                  className="mt-4 text-red-500 hover:text-red-700"
                >
                  Remove Service
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddService}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              Add Service
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroOurServices;
