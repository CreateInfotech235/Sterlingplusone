import { useState, useEffect } from "react";
import { GetFooter, FooterPost } from "../../Api/Footer";
import { fileToBase64 } from "../../Api/Convertbase64";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    section: [], // Ensure this is always an array
    socialMedia: [], // Ensure this is always an array
    copyright: "",
  });
  
  console.log("Before adding button:", footerData.section);

  console.log(footerData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchFooterData = async () => {
    try {
      setLoading(true);
      const response = await GetFooter();
  
      if (response && response.footer) {
        setFooterData({
          section: response.footer.section || [],
          socialMedia: response.footer.socialMedia || [],
          copyright: response.footer.copyright || "",
        });
      } else {
        throw new Error("Invalid API response");
      }
    } catch (err) {
      setError("Failed to fetch footer data");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchFooterData();
  }, []);

  const handleSectionChange = (sectionIndex, field, value) => {
    const updatedSections = [...footerData.section];
    updatedSections[sectionIndex] = {
      ...updatedSections[sectionIndex],
      [field]: value
    };
    setFooterData({
      ...footerData,
      section: updatedSections
    });
  };

  const handleButtonChange = (sectionIndex, buttonIndex, field, value) => {
    const updatedSections = [...footerData.section];
    const updatedButtons = [...updatedSections[sectionIndex].list];

    updatedButtons[buttonIndex] = {
      ...updatedButtons[buttonIndex],
      [field]: value
    };

    updatedSections[sectionIndex] = {
      ...updatedSections[sectionIndex],
      list: updatedButtons
    };

    setFooterData({
      ...footerData,
      section: updatedSections
    });
  };


  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = [...footerData.socialMedia];
    updatedSocialMedia[index] = {
      ...updatedSocialMedia[index],
      [field]: value
    };
    setFooterData({
      ...footerData,
      socialMedia: updatedSocialMedia
    });
  };

  const handleIconUpload = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleSocialMediaChange(index, "icon", base64);
      } catch (err) {
        setError("Error converting image to base64");
      }
    }
  };

  const handleAddSection = () => {
    setFooterData({
      ...footerData,
      section: [
        ...(footerData.section || []), // Ensure `section` is an array
        { title: "", list: [{ name: "", link: "", isbtn: true }] },
      ],
    });
  };
  const handleAddButton = (sectionIndex) => {
    try {
      const updatedSections = [...footerData.section];
  console.log(updatedSections);
      if (!updatedSections[sectionIndex]?.list) {
        updatedSections[sectionIndex].list = [];
      }
  
      updatedSections[sectionIndex].list.push({ name: "", link: "", isbtn: true });
  
      setFooterData({
        ...footerData,
        section: updatedSections,
      });
    } catch (err) {
      console.error("Error adding button:", err);
    }
  };
  
  

  const handleAddSocialMedia = () => {
    setFooterData({
      ...footerData,
      socialMedia: [...footerData.socialMedia, { name: "", icon: "", link: "" }]
    });
  };

  const handleRemoveSection = (index) => {
    const updatedSections = footerData.section.filter((_, i) => i !== index);
    setFooterData({
      ...footerData,
      section: updatedSections
    });
  };

  const handleRemoveButton = (sectionIndex, buttonIndex) => {
    const updatedSections = [...footerData.section];
    updatedSections[sectionIndex].list = updatedSections[sectionIndex].list.filter((_, i) => i !== buttonIndex);
    setFooterData({
      ...footerData,
      section: updatedSections
    });
  };

  const handleRemoveSocialMedia = (index) => {
    const updatedSocialMedia = footerData.socialMedia.filter((_, i) => i !== index);
    setFooterData({
      ...footerData,
      socialMedia: updatedSocialMedia
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    // Check if social media links are provided where isbtn is true
    footerData.socialMedia.forEach((social) => {
      if (social.isbtn && !social.link) {
        setError("Please provide a link for all active social media buttons.");
        hasError = true;
      }
    });

    if (hasError) return;

    try {
      const data = {
        footer: {
          ...footerData
        }
      };
      const response = await FooterPost(data);
      if (response) {
        alert("Footer data saved successfully!");
        fetchFooterData();
      }
    } catch (err) {
      setError("Error saving data");
    } finally {
      setLoading(false);
    }
  };


  const triggerFileInput = (index) => {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "file";
    hiddenInput.accept = "image/*";
    hiddenInput.onchange = (e) => handleIconUpload(e, index);
    hiddenInput.click();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse space-y-4 w-full max-w-5xl">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!footerData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Footer Settings</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Sections</h3>
            {footerData?.section?.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6 p-4 bg-gray-50 border rounded-lg">
                <div className="flex items-center justify-between mb-4 flex-col sm:flex-row">
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => handleSectionChange(sectionIndex, "title", e.target.value)}
                    placeholder="Section Title"
                    className="w-full sm:w-auto p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSection(sectionIndex)}
                    className="mt-4 sm:mt-0 sm:ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>

                {section?.list?.map((list, buttonIndex) => (
                  <div key={buttonIndex} className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                      type="text"
                      value={list?.name}
                      onChange={(e) => handleButtonChange(sectionIndex, buttonIndex, "name", e.target.value)}
                      placeholder="Button Name"
                      className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      value={list?.link}
                      onChange={(e) => handleButtonChange(sectionIndex, buttonIndex, "link", e.target.value)}
                      placeholder="Button Link"
                      required={list.isbtn}
                      name={`button-link-${sectionIndex}-${buttonIndex}`} 
                      className={`flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${!list.isbtn ? 'hidden' : ''}`}
                    />

                    <div className="flex items-center space-x-2">
                      <label htmlFor={`isbtn-${sectionIndex}-${buttonIndex}`} className="text-gray-700">Is Button?</label>
                      <input
                        type="checkbox"
                        id={`isbtn-${sectionIndex}-${buttonIndex}`}
                        checked={list.isbtn}
                        onChange={(e) => handleButtonChange(sectionIndex, buttonIndex, "isbtn", e.target.checked)}
                        className="h-5 w-5"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveButton(sectionIndex, buttonIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddButton(sectionIndex)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add List
                </button>
              </div>
            ))}
                 <button
              type="button"
              onClick={handleAddSection}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add Section
            </button>

            {footerData.socialMedia.map((social, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 mb-4 items-center p-4 bg-gray-50 border rounded-lg">
                <div
                  onClick={() => triggerFileInput(index)}
                  className="w-12 h-12 border rounded-md cursor-pointer flex items-center justify-center overflow-hidden bg-gray-100 hover:bg-gray-200"
                >
                  {social.icon ? (
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className="w-full h-full object-cover bg-black"
                    />
                  ) : (
                    <span className="text-gray-500">Icon</span>
                  )}
                </div>


                <input
                  type="text"
                  value={social.name}
                  onChange={(e) => handleSocialMediaChange(index, "name", e.target.value)}
                  placeholder="Platform Name"
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />


                <input
                  type="text"
                  value={social.link}

                  onChange={(e) => handleSocialMediaChange(index, "link", e.target.value)}
                  placeholder="Social Media Link"
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />


                <button
                  type="button"
                  onClick={() => handleRemoveSocialMedia(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
       


            <button
              type="button"
              onClick={handleAddSocialMedia}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add Social Media
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Copyright</h3>
            <input
              type="text"
              value={footerData.copyright}
              onChange={(e) => setFooterData({ ...footerData, copyright: e.target.value })}
              placeholder="Copyright Text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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

export default Footer;
