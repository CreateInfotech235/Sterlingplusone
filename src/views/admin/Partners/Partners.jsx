import { useState, useEffect } from "react";
import { GetPartners, PartnersPost } from "../Api/Partners";
import { fileToBase64 } from "../Api/Convertbase64";

const Partners = () => {
  const [partnersData, setPartnersData] = useState({
    title: "Our Trusted Partners",
    partners: [
      {
        img: "",
        companyName: "",
        link: ""
      }
    ]
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPartnersData = async () => {
    try {
      setLoading(true);
      const response = await GetPartners();
      console.log(response);

      if (response) {
        setPartnersData({
          title: response.title || partnersData.title,
          partners: response.ourPartnerSection || partnersData.partners
        });
      }
    } catch (err) {
      setError("Failed to fetch partners data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartnersData();
  }, []);

  const handlePartnerChange = (index, field, value) => {
    const updatedPartners = [...partnersData.partners];
    updatedPartners[index] = {
      ...updatedPartners[index],
      [field]: value
    };
    setPartnersData({
      ...partnersData,
      partners: updatedPartners
    });
  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handlePartnerChange(index, "img", base64);
      } catch (err) {
        setError("Error converting image to base64");
        console.error(err);
      }
    }
  };

  const handleAddPartner = () => {
    setPartnersData({
      ...partnersData,
      partners: [...partnersData.partners, { img: "", companyName: "", link: "" }]
    });
  };

  const handleRemovePartner = (index) => {
    const updatedPartners = partnersData.partners.filter((_, i) => i !== index);
    setPartnersData({
      ...partnersData,
      partners: updatedPartners
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await PartnersPost({
        title: partnersData.title,
        partners: partnersData.partners
      });
      if (response) {
        alert("Partners data saved successfully!");
        fetchPartnersData();
      }
    } catch (err) {
      setError("Error saving partners data");
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse space-y-8 w-full max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-6 border rounded-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-10 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Partners Settings</h2>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="block text-xl mb-2 font-medium">Title</label>
          <input
            type="text"
            value={partnersData.title}
            onChange={(e) => setPartnersData({ ...partnersData, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Partners</h3>
          {partnersData.partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-6 p-6 border rounded-lg shadow-md bg-white"
            >
              <div className="flex-shrink-0">
                <label className="block mb-2 font-medium">Logo</label>
                <div
                  onClick={() => triggerFileInput(index)}
                  className="cursor-pointer w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-md hover:bg-gray-100"
                >
                  {partner.img ? (
                    <img
                      src={partner.img}
                      alt="Partner logo preview"
                      className="w-full h-full object-contain rounded-md"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm text-center">Click to select logo</span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Company Name</label>
                  <input
                    type="text"
                    value={partner.companyName}
                    onChange={(e) => handlePartnerChange(index, "companyName", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Link</label>
                  <input
                    type="text"
                    value={partner.link}
                    onChange={(e) => handlePartnerChange(index, "link", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRemovePartner(index)}
                className="text-red-500 mt-4 sm:mt-0 sm:ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddPartner}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 mb-6"
          >
            Add Partner
          </button>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Partners;
