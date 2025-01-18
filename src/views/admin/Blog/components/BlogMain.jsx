import { useState, useEffect } from "react";
import { GetBlogPage, BlogPagePost } from "../../Api/blog";

const BlogMain = () => {
  const [blogData, setBlogData] = useState({
    _id: "",
    blogPage: {
      title: "",
      subTitle: "",
      button: [
        {
          name: "",
          link: ""
        }
      ] // Initialize as an array
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const response = await GetBlogPage();
      if (response && response.length > 0) {
        setBlogData(response[0]);
      }
    } catch (err) {
      setError("Failed to fetch blog data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      blogPage: {
        ...prev.blogPage,
        [name]: value
      }
    }));
  };

  const handleButtonChange = (e, index) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      blogPage: {
        ...prev.blogPage,
        button: prev.blogPage.button.map((btn, i) =>
          i === index ? { ...btn, [name]: value } : btn
        )
      }
    }));
  };

  const handleAddButton = () => {
    setBlogData((prev) => ({
      ...prev,
      blogPage: {
        ...prev.blogPage,
        button: [...prev.blogPage.button, { name: "", link: "" }]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      {
        blogPage: {
          title: blogData.blogPage.title,
          subTitle: blogData.blogPage.subTitle,
          button: blogData.blogPage.button
        }
      });
    try {
      setLoading(true);
      const response = await BlogPagePost({
        blogPage: {
          title: blogData.blogPage.title,
          subTitle: blogData.blogPage.subTitle,
          button: blogData.blogPage.button
        }
      });
      if (response) {
        alert("Data saved successfully!");
        fetchBlogData();
      }
    } catch (err) {
      setError("Error saving data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
          <div className="space-y-6">
            <div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
            <div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
                <div>
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 border-b pb-4">Blog Page Settings</h2>
        {error && <div className="text-red-500 text-center mb-6 p-4 bg-red-50 rounded-lg">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <label htmlFor="title" className="block text-xl font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={blogData?.blogPage?.title || ""}
              onChange={handleInputChange}
              className="block w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="subTitle" className="block text-xl font-semibold text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              id="subTitle"
              name="subTitle"
              value={blogData?.blogPage?.subTitle || ""}
              onChange={handleInputChange}
              className="block w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Button Settings</h3>
            {blogData?.blogPage?.button?.map((button, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={`buttonName-${index}`} className="block text-xl font-semibold text-gray-700 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    id={`buttonName-${index}`}
                    name="name"
                    value={button?.name || ""}
                    onChange={(e) => handleButtonChange(e, index)}
                    className="block w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  />
                </div>
                <div>
                  <label htmlFor={`buttonLink-${index}`} className="block text-xl font-semibold text-gray-700 mb-2">
                    Button Link
                  </label>
                  <input
                    type="text"
                    id={`buttonLink-${index}`}
                    name="link"
                    value={button?.link || ""}
                    onChange={(e) => handleButtonChange(e, index)}
                    className="block w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
              onClick={handleAddButton}
            >
              Add Button
            </button>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 text-xl font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogMain;
