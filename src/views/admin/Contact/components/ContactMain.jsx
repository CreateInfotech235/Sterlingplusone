import { useState, useEffect } from "react";
import { GetContactPage, ContactPagePost } from "../../Api/contactpage";
import { fileToBase64 } from "../../Api/Convertbase64";

const ContactMain = () => {
  const [contactData, setContactData] = useState({
    contactPage: {
      title: "",
      bgImage: "",
      subTitle: "",
      image: "",
      button: {
        name: "",
        link: ""
      },
      box: [
        {
          icon: "",
          text: ""
        },
        {
          icon: "",
          text: ""
        },
        {
          icon: "",
          text: ""
        }
      ]
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContactData = async () => {
    try {
      setLoading(true);
      const response = await GetContactPage();
      console.log(response);
      
      if (response) {
        setContactData(response);
      }
    } catch (err) {
      setError("Failed to fetch contact data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const handleInputChange = (e, value) => {
    if (e.target.name === "bgImage") {
      setContactData(prev => ({
        ...prev,
        contactPage: {
          ...prev.contactPage,
          bgImage: value
        }
      }));
    } else {
      setContactData(prev => ({
        ...prev,
        contactPage: {
          ...prev.contactPage,
          [e.target.name]: value
        }
      }));
    }
  };

  const handleButtonChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      contactPage: {
        ...prev.contactPage,
        button: {
          ...prev.contactPage.button,
          [name]: value
        }
      }
    }));
  };

  const handleBoxChange = (index, field, value) => {
    setContactData(prev => {
      const newBox = [...prev.contactPage.box];
      newBox[index] = {
        ...newBox[index],
        [field]: value
      };
      return {
        ...prev,
        contactPage: {
          ...prev.contactPage,
          box: newBox
        }
      };
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        setContactData(prev => ({
          ...prev,
          contactPage: {
            ...prev.contactPage,
            image: base64
          }
        }));
      } catch (err) {
        setError('Error converting image to base64');
        console.error(err);
      }
    }
  };

  const handleIconUpload = async (index, e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleBoxChange(index, "icon", base64);
      } catch (err) {
        setError('Error converting icon to base64');
        console.error(err);
      }
    }
  };

  const triggerFileInput = (index, type) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'file';
    hiddenInput.accept = 'image/*';
    hiddenInput.onchange = (e) => {
      if (type === 'banner') {
        handleImageUpload(e);
      } else {
        handleIconUpload(index, e);
      }
    };
    hiddenInput.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await ContactPagePost(contactData);
      if (response) {
        alert('Data saved successfully!');
        fetchContactData();
      }
    } catch (err) {
      setError('Error saving data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !contactData?.contactPage) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title Skeleton */}
          <div className="animate-pulse mb-8">
            <div className="h-10 w-3/4 mx-auto bg-gray-200 rounded-lg"></div>
          </div>

          {/* Form Fields Skeleton */}
          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10 space-y-8 animate-pulse">
            {/* Title & Subtitle Fields */}
            <div className="space-y-6">
              <div className="h-6 w-24 bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
              <div className="h-6 w-32 bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
            </div>

            {/* Button Settings */}
            <div className="space-y-6">
              <div className="h-8 w-48 bg-gray-200 rounded"></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="h-6 w-24 bg-gray-200 rounded"></div>
                  <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 w-24 bg-gray-200 rounded"></div>
                  <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Banner Image */}
            <div className="space-y-4">
              <div className="h-6 w-32 bg-gray-200 rounded"></div>
              <div className="h-80 w-full md:w-96 bg-gray-200 rounded-lg"></div>
            </div>

            {/* Contact Boxes */}
            <div className="space-y-6">
              <div className="h-8 w-48 bg-gray-200 rounded"></div>
              {[1, 2, 3].map((box, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg space-y-4">
                  <div className="h-6 w-24 bg-gray-200 rounded"></div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 w-16 bg-gray-200 rounded"></div>
                      <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <button 
            onClick={fetchContactData}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Page Settings</h2>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">



      <label htmlFor="HeroDataBgImage" className="text-md font-medium text-gray-700">
                bg image
              </label>
              <div className="w-[300px] h-[300px] border-dashed border-2 flex items-center justify-center">
                {contactData.contactPage.bgImage ? (
                  <label htmlFor="HeroDataBgImage" className="w-[300px] h-[300px] flex items-center justify-center">
                    <img
                      src={contactData.contactPage.bgImage}
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





        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={contactData?.contactPage?.title || ""}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Subtitle</label>
          <input
            type="text"
            name="subTitle"
            value={contactData?.contactPage?.subTitle || ""}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl mb-4 font-semibold">Button Settings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Button Text</label>
              <input
                type="text"
                name="name"
                value={contactData?.contactPage?.button?.name || ""}
                onChange={handleButtonChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Button Link</label>
              <input
                type="text"
                name="link"
                value={contactData?.contactPage?.button?.link || ""}
                onChange={handleButtonChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Banner Image</label>
          <div 
            onClick={() => triggerFileInput(null, 'banner')}
            className="cursor-pointer w-full md:w-96 h-80 flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-500"
          >
            {contactData?.contactPage?.image ? (
              <img 
                src={contactData.contactPage.image}
                alt="Banner preview"
                className="w-full h-full object-cover rounded-lg hover:opacity-80"
              />
            ) : (
              <span className="text-gray-500 text-center">Click to select banner</span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl mb-4 font-semibold">Contact Information Boxes</h3>
          {contactData?.contactPage?.box?.map((box, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Box {index + 1}</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Icon</label>
                  <div 
                    onClick={() => triggerFileInput(index, 'icon')}
                    className="cursor-pointer w-20 h-20 flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-500"
                  >
                    {box.icon ? (
                      <img 
                        src={box.icon}
                        alt={`Icon ${index + 1}`}
                        className="w-20 h-20 object-contain rounded-lg hover:opacity-80"
                      />
                    ) : (
                      <span className="text-gray-500 text-center">Click to select icon</span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Text</label>
                  <input
                    type="text"
                    value={box.text || ""}
                    onChange={(e) => handleBoxChange(index, "text", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
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

export default ContactMain;
