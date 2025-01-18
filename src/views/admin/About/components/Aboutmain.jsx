import { useState, useEffect } from "react";
import { GetAboutPage, AboutPagePost } from "../../Api/About";
import { fileToBase64 } from "../../Api/Convertbase64";

const Aboutmain = () => {
  const [aboutData, setAboutData] = useState({
    aboutAs: {
      mainTitle: "",
      title: "",
      description: [],
      button: {
        name: "",
        link: ""
      },
      contectNumber: "",
      achievements: [
        {
          title: "",
          description: ""
        }
      ],
      image: "",
      infoTitle: "",
      infoDescription: "",
      services: [
        {
          title: "",
          servicePersantage: ""
        }
      ]
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await GetAboutPage();
      console.log(response);

      if (response && response[0]) {
        setAboutData(response[0]);
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

  const handleInputChange = (field, value) => {
    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        [field]: value
      }
    }));
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...aboutData.aboutAs.description];
    updatedDescriptions[index] = value;

    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        description: updatedDescriptions
      }
    }));
  };

  const handleAddDescription = () => {
    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        description: [...prev.aboutAs.description, ""]
      }
    }));
  };

  const handleRemoveDescription = (index) => {
    setAboutData(prev => {
      const updatedDescriptions = [...prev.aboutAs.description];
      updatedDescriptions.splice(index, 1);
      return {
        ...prev,
        aboutAs: {
          ...prev.aboutAs,
          description: updatedDescriptions
        }
      };
    });
  };

  const handleButtonChange = (field, value) => {
    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        button: {
          ...prev.aboutAs.button,
          [field]: value
        }
      }
    }));
  };

  const handleAchievementChange = (index, field, value) => {
    const updatedAchievements = [...aboutData.aboutAs.achievements];
    updatedAchievements[index] = {
      ...updatedAchievements[index],
      [field]: value
    };

    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        achievements: updatedAchievements
      }
    }));
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...aboutData.aboutAs.services];
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: value
    };

    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        services: updatedServices
      }
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleInputChange('image', base64);
      } catch (err) {
        setError('Error converting image to base64');
        console.error(err);
      }
    }
  };

  const handleAddAchievement = () => {
    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        achievements: [
          ...prev.aboutAs.achievements,
          { title: "", description: "" }
        ]
      }
    }));
  };

  const handleAddService = () => {
    setAboutData(prev => ({
      ...prev,
      aboutAs: {
        ...prev.aboutAs,
        services: [
          ...prev.aboutAs.services,
          { title: "", servicePersantage: "" }
        ]
      }
    }));
  };

  const handleRemoveAchievement = (index) => {
    setAboutData(prev => {
      const updatedAchievements = [...prev.aboutAs.achievements];
      updatedAchievements.splice(index, 1);
      return {
        ...prev,
        aboutAs: {
          ...prev.aboutAs,
          achievements: updatedAchievements
        }
      };
    });
  };

  const handleRemoveService = (index) => {
    setAboutData(prev => {
      const updatedServices = [...prev.aboutAs.services];
      updatedServices.splice(index, 1);
      return {
        ...prev,
        aboutAs: {
          ...prev.aboutAs,
          services: updatedServices
        }
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      const response = await AboutPagePost(aboutData);
      if (response) {
        alert('Data saved successfully!');
        await fetchAboutData();
      }
    } catch (err) {
      setError('Error saving data: ' + (err.message || 'Unknown error'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'file';
    hiddenInput.accept = 'image/*';
    hiddenInput.onchange = handleImageUpload;
    hiddenInput.click();
  };

if (loading) {
  return <div>Loading...</div>;
}



  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">About Page Settings</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Main Title</label>
          <input
            type="text"
            value={aboutData.aboutAs.mainTitle || ""}
            onChange={(e) => handleInputChange('mainTitle', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={aboutData.aboutAs.title || ""}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl mb-2">Descriptions</h3>
          {aboutData.aboutAs.description.map((desc, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="mb-4">
                <label className="block mb-2">Description {index + 1}</label>
                <textarea
                  value={desc || ""}
                  onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  className="w-full p-2 border rounded"
                  rows={2}
                />
              </div>
              {aboutData.aboutAs.description.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveDescription(index)}
                  className="text-red-500"
                >
                  Remove Description
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDescription}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Description
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Contact Number</label>
          <input
            type="text"
            value={aboutData.aboutAs.contectNumber || ""}
            onChange={(e) => handleInputChange('contectNumber', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-xl mb-2">Button Settings</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2">Button Text</label>
              <input
                type="text"
                value={aboutData.aboutAs.button.name || ""}
                onChange={(e) => handleButtonChange('name', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2">Button Link</label>
              <input
                type="text"
                value={aboutData.aboutAs.button.link || ""}
                onChange={(e) => handleButtonChange('link', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Image</label>
          <div
            onClick={triggerFileInput}
            className="cursor-pointer"
          >
            {aboutData.aboutAs.image ? (
              <img
                src={aboutData.aboutAs.image}
                alt="About"
                className="w-32 h-32 object-contain border rounded hover:opacity-80"
              />
            ) : (
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400">
                <span className="text-gray-500 text-sm text-center">Click to select image</span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Info Title</label>
          <input
            type="text"
            value={aboutData.aboutAs.infoTitle || ""}
            onChange={(e) => handleInputChange('infoTitle', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Info Description</label>
          <textarea
            value={aboutData.aboutAs.infoDescription || ""}
            onChange={(e) => handleInputChange('infoDescription', e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl mb-2">Achievements</h3>
          {aboutData.aboutAs.achievements.map((achievement, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="mb-4">
                <label className="block mb-2">Achievement Title</label>
                <input
                  type="text"
                  value={achievement.title || ""}
                  onChange={(e) => handleAchievementChange(index, 'title', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Achievement Description</label>
                <textarea
                  value={achievement.description || ""}
                  onChange={(e) => handleAchievementChange(index, 'description', e.target.value)}
                  className="w-full p-2 border rounded"
                  rows={2}
                />
              </div>
              {aboutData.aboutAs.achievements.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveAchievement(index)}
                  className="text-red-500"
                >
                  Remove Achievement
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAchievement}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Achievement
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-xl mb-2">Services</h3>
          {aboutData.aboutAs.services.map((service, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="mb-4">
                <label className="block mb-2">Service Title</label>
                <input
                  type="text"
                  value={service.title || ""}
                  onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Service Percentage</label>
                <input
                  type="text"
                  value={service.servicePersantage || ""}
                  onChange={(e) => handleServiceChange(index, 'servicePersantage', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              {aboutData.aboutAs.services.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveService(index)}
                  className="text-red-500"
                >
                  Remove Service
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddService}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Service
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Aboutmain;
