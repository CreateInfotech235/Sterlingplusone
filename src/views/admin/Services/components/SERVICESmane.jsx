import { useState, useEffect } from "react";
import { GetServiceMain, ServiceMainPost } from "../../Api/servicespage";

const Servicesmane = () => {
  const [servicesData, setServicesData] = useState({
    servicesPage: {
      title: "",
      subTitle: "", 
      button: {
        name: "",
        link: ""
      }
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchServicesData = async () => {
    try {
      setLoading(true);
      const response = await GetServiceMain();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServicesData(prev => ({
      ...prev,
      servicesPage: {
        ...prev.servicesPage,
        [name]: value
      }
    }));
  };

  const handleButtonChange = (e) => {
    const { name, value } = e.target;
    setServicesData(prev => ({
      ...prev,
      servicesPage: {
        ...prev.servicesPage,
        button: {
          ...prev.servicesPage.button,
          [name]: value
        }
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await ServiceMainPost(servicesData);
      if (response) {
        alert('Data saved successfully!');
        fetchServicesData();
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
      <h2 className="text-3xl font-bold text-center mb-8">Services Page Hero Settings</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={servicesData?.servicesPage?.title || ""}
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
            value={servicesData?.servicesPage?.subTitle || ""}
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
                value={servicesData.servicesPage.button.name || ""}
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
                value={servicesData.servicesPage.button.link || ""}
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

export default Servicesmane;
