import { useState, useEffect } from "react";
import { GetHeroChooseUs, HeroChooseUsPost } from "../../Api/HeroChooseus";
import { fileToBase64 } from "../../Api/Convertbase64";

const HeroChooseUs = () => {
  const [heroData, setHeroData] = useState({
    heroChooseUs: {
      maintitle: "",
      mainImage: "",
      childImage: "",
      thirdImage: "",
      title: "",
      subTitle: "",
      details: [
        {
          img: "",
          title: "",
          description: ""
        }
      ]
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroData = async () => {
    try {
      setLoading(true);
      const response = await GetHeroChooseUs();
      if (response && response[0]) {
        setHeroData(response[0]);
      }
    } catch (err) {
      setError("Failed to fetch hero choose us data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  const handleInputChange = (field, value) => {
    setHeroData({
      ...heroData,
      heroChooseUs: {
        ...heroData.heroChooseUs,
        [field]: value
      }
    });
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...heroData.heroChooseUs.details];
    updatedDetails[index] = {
      ...updatedDetails[index],
      [field]: value
    };
    setHeroData({
      ...heroData,
      heroChooseUs: {
        ...heroData.heroChooseUs,
        details: updatedDetails
      }
    });
  };

  const handleImageUpload = async (e, field, detailIndex = null) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        if (detailIndex !== null) {
          handleDetailChange(detailIndex, 'img', base64);
        } else {
          handleInputChange(field, base64);
        }
      } catch (err) {
        setError('Error converting image to base64');
        console.error(err);
      }
    }
  };

  const handleAddDetail = () => {
    setHeroData({
      ...heroData,
      heroChooseUs: {
        ...heroData.heroChooseUs,
        details: [
          ...heroData.heroChooseUs.details,
          {
            img: "",
            title: "",
            description: ""
          }
        ]
      }
    });
  };

  const handleRemoveDetail = (index) => {
    const updatedDetails = heroData.heroChooseUs.details.filter((_, i) => i !== index);
    setHeroData({
      ...heroData,
      heroChooseUs: {
        ...heroData.heroChooseUs,
        details: updatedDetails
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await HeroChooseUsPost(heroData);
      if (response) {
        alert('Data saved successfully!');
        fetchHeroData();
      }
    } catch (err) {
      setError('Error saving data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = (field, detailIndex = null) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'file';
    hiddenInput.accept = 'image/*';
    hiddenInput.onchange = (e) => handleImageUpload(e, field, detailIndex);
    hiddenInput.click();
  };

  if (!heroData.heroChooseUs.maintitle && !heroData.heroChooseUs.mainImage) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map((n) => (
                <div key={n} className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-48 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-6">
              {[1,2].map((n) => (
                <div key={n} className="p-6 space-y-4 border border-gray-200 rounded-lg">
                  <div className="h-48 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-24 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            <div className="h-12 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Hero Choose Us Section Settings</h2>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-lg">Main Title</label>
            <input
              type="text"
              value={heroData.heroChooseUs.maintitle}
              onChange={(e) => handleInputChange('maintitle', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">Title</label>
            <input
              type="text"
              value={heroData.heroChooseUs.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {['mainImage', 'childImage', 'thirdImage'].map((imageField) => (
            <div key={imageField}>
              <label className="block mb-2 text-lg">{imageField.charAt(0).toUpperCase() + imageField.slice(1)}</label>
              <div 
                onClick={() => triggerFileInput(imageField)}
                className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg hover:border-gray-400"
              >
                {heroData.heroChooseUs[imageField] ? (
                  <img 
                    src={heroData.heroChooseUs[imageField]}
                    alt={imageField}
                    className="w-full h-40 object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-gray-500">Click to select image</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">Sub Title</label>
          <input
            type="text"
            value={heroData.heroChooseUs.subTitle}
            onChange={(e) => handleInputChange('subTitle', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-2xl mb-4">Details</h3>
          {heroData.heroChooseUs.details.map((detail, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg shadow-md bg-white">
              <div className="mb-4">
                <label className="block mb-2 text-lg">Detail Image</label>
                <div 
                  onClick={() => triggerFileInput('img', index)}
                  className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg hover:border-gray-400"
                >
                  {detail.img ? (
                    <img 
                      src={detail.img}
                      alt={`Detail ${index + 1}`}
                      className="w-full h-40 object-contain rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500">Click to select image</span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-lg">Title</label>
                <input
                  type="text"
                  value={detail.title}
                  onChange={(e) => handleDetailChange(index, 'title', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-lg">Description</label>
                <textarea
                  value={detail.description}
                  onChange={(e) => handleDetailChange(index, 'description', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <button
                type="button"
                onClick={() => handleRemoveDetail(index)}
                className="text-red-500 hover:underline"
              >
                Remove Detail
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDetail}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Add Detail
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-8 py-3 rounded-lg w-full mt-4 hover:bg-green-600"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
      </div>
    </div>
  );
};

export default HeroChooseUs;
