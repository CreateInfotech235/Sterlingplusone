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
      console.log(response);

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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Services Section Settings</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        {servicesData.servicesPageSection.services.map((service, index) => (
          <div key={index} className="mb-6 p-4 border rounded">
            <div className="mb-4">
              <label className="block mb-2">Service Image *</label>
              <div
                onClick={() => triggerFileInput(index)}
                className="cursor-pointer"
              >
                {service.img ? (
                  <img
                    src={service.img}
                    alt={`Service ${index + 1}`}
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
              <label className="block mb-2">Title *</label>
              <input
                type="text"
                value={service.title || ""}
                onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Description *</label>
              <textarea
                value={service.description || ""}
                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                className="w-full p-2 border rounded"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <h3 className="text-xl mb-2">Button Settings</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-2">Button Text *</label>
                  <input
                    type="text"
                    value={service.button.name || ""}
                    onChange={(e) => handleButtonChange(index, 'name', e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2">Button Link *</label>
                  <input
                    type="text"
                    value={service.button.link || ""}
                    onChange={(e) => handleButtonChange(index, 'link', e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
            </div>

            {servicesData.servicesPageSection.services.length > 1 && (
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

        <div>
          <button
            type="button"
            onClick={handleAddService}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
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
  );
};

export default Servicespagesections;
