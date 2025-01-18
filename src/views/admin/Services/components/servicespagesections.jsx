import { useState, useEffect } from "react";
import { GetService, ServicePost } from "../../Api/servicespage";
import { fileToBase64 } from "../../Api/Convertbase64";

const Servicespagesections = () => {
  const [servicesData, setServicesData] = useState({
    servicesPageSection: {
      services: [{
        img: "",
        title: "",
        description: "",
        button: {
          name: "",
          link: ""
        }
      }]
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchServicesData = async () => {
    try {
      setLoading(true);
      const response = await GetService();
      if (response) {
        setServicesData(response);
      }
    } catch (err) {
      setError("Failed to fetch services data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicesData();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedServices = [...servicesData.servicesPageSection.services];
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: value
    };

    setServicesData({
      ...servicesData,
      servicesPageSection: {
        ...servicesData.servicesPageSection,
        services: updatedServices
      }
    });
  };

  const handleButtonChange = (index, field, value) => {
    const updatedServices = [...servicesData.servicesPageSection.services];
    updatedServices[index] = {
      ...updatedServices[index],
      button: {
        ...updatedServices[index].button,
        [field]: value
      }
    };

    setServicesData({
      ...servicesData,
      servicesPageSection: {
        ...servicesData.servicesPageSection,
        services: updatedServices
      }
    });
  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleInputChange(index, 'img', base64);
      } catch (err) {
        setError('Error converting image to base64');
        console.error(err);
      }
    }
  };

  const handleAddService = () => {
    const newService = {
      img: "",
      title: "",
      description: "",
      button: {
        name: "",
        link: ""
      }
    };

    setServicesData(prevData => ({
      ...prevData,
      servicesPageSection: {
        ...prevData.servicesPageSection,
        services: [...prevData.servicesPageSection.services, newService]
      }
    }));
  };

  const handleRemoveService = (index) => {
    setServicesData(prevData => {
      const updatedServices = [...prevData.servicesPageSection.services];
      updatedServices.splice(index, 1);
      return {
        ...prevData,
        servicesPageSection: {
          ...prevData.servicesPageSection,
          services: updatedServices
        }
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const isValid = servicesData.servicesPageSection.services.every(service => 
      service.img && 
      service.title && 
      service.description && 
      service.button.name && 
      service.button.link
    );

    if (!isValid) {
      setError('Please fill in all required fields for each service');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await ServicePost(servicesData);
      if (response) {
        alert('Data saved successfully!');
        await fetchServicesData(); // Refresh data after successful save
      }
    } catch (err) {
      setError('Error saving data: ' + (err.message || 'Unknown error'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = (index) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'file';
    hiddenInput.accept = 'image/*';
    hiddenInput.onchange = (e) => handleImageUpload(e, index);
    hiddenInput.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse space-y-4">
          <div className="h-12 w-48 bg-gray-200 rounded"></div>
          <div className="h-32 w-96 bg-gray-200 rounded"></div>
          <div className="h-32 w-96 bg-gray-200 rounded"></div>
          <div className="h-32 w-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Services Section Settings</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        {servicesData.servicesPageSection.services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-8 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/3">
                <label className="block text-lg font-medium mb-2">Service Image *</label>
                <div
                  onClick={() => triggerFileInput(index)}
                  className="cursor-pointer w-full h-32 flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500"
                >
                  {service.img ? (
                    <img
                      src={service.img}
                      alt={`Service ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500">Click to select image</span>
                  )}
                </div>
              </div>

              <div className="w-full sm:w-2/3">
                <div>
                  <label className="block text-lg font-medium mb-2">Title *</label>
                  <input
                    type="text"
                    value={service.title || ""}
                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-lg font-medium mb-2">Description *</label>
                  <textarea
                    value={service.description || ""}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    rows={4}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Button Settings</h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/2">
                  <label className="block text-lg font-medium mb-2">Button Text *</label>
                  <input
                    type="text"
                    value={service.button.name || ""}
                    onChange={(e) => handleButtonChange(index, 'name', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block text-lg font-medium mb-2">Button Link *</label>
                  <input
                    type="text"
                    value={service.button.link || ""}
                    onChange={(e) => handleButtonChange(index, 'link', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            {servicesData.servicesPageSection.services.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveService(index)}
                className="text-red-500 font-semibold mt-4"
              >
                Remove Service
              </button>
            )}
          </div>
        ))}

        <div className="text-center mb-8">
          <button
            type="button"
            onClick={handleAddService}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
          >
            Add Service
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
      </div>
    </div>
  );
};

export default Servicespagesections;
