import { useState, useEffect } from "react";
import { GetBlogPage, BlogPagePost } from "../../Api/blog";
import { fileToBase64 } from "../../Api/Convertbase64";

const Allblog = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [blogData, setBlogData] = useState({
    _id: "",
    Allblog: {
      image: "",
      title: "",
      subTitle: "",
      description: "",
      thought: "",
      subImage: "",
      subDescription: "",
      button: [{
        name: "",
        link: ""
      }],
      isShow: false
    }
  });
  console.log(blogData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://sterlingplusone-backend-1.onrender.com/web/allblogs');
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError("Failed to fetch blogs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prev => ({
      ...prev,
      Allblog: {
        ...prev.Allblog,
        [name]: value
      }
    }));
  };

  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        setBlogData(prev => ({
          ...prev,
          Allblog: {
            ...prev.Allblog,
            [field]: base64
          }
        }));
      } catch (err) {
        setError('Error converting image to base64');
        console.error(err);
      }
    }
  };

  const handleButtonChange = (index, e) => {
    const { name, value } = e.target;
    setBlogData(prev => {
      const newButtons = [...prev.Allblog.button];
      newButtons[index] = {
        ...newButtons[index],
        [name]: value
      };
      return {
        ...prev,
        Allblog: {
          ...prev.Allblog,
          button: newButtons
        }
      };
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('https://sterlingplusone-backend-1.onrender.com/web/allblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogData)
      });
      if (response.ok) {
        alert('Blog created successfully!');
        fetchBlogs();
        setBlogData({
          _id: "",
          Allblog: {
            image: "",
            title: "",
            subTitle: "",
            description: "",
            thought: "",
            subImage: "",
            subDescription: "",
            button: [{
              name: "",
              link: ""
            }],
            isShow: false
          }
        });
      }
    } catch (err) {
      setError('Error creating blog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://sterlingplusone-backend-1.onrender.com/web/allblog/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogData)
      });
      if (response.ok) {
        alert('Blog updated successfully!');
        fetchBlogs();
      }
    } catch (err) {
      setError('Error updating blog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      setLoading(true);
      const response = await fetch(`https://sterlingplusone-backend-1.onrender.com/web/allblog/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Blog deleted successfully!');
        fetchBlogs();
      }
    } catch (err) {
      setError('Error deleting blog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = (field) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'file';
    hiddenInput.accept = 'image/*';
    hiddenInput.onchange = (e) => handleImageUpload(e, field);
    hiddenInput.click();
  };

  const handleAddButton = () => {
    setBlogData((prev) => ({
      ...prev,
      Allblog: {
        ...prev.Allblog,
        button: [...prev.Allblog.button, { name: "", link: "" }]
      }
    }));
  };


  const handleRemoveButton = (index) => {
    setBlogData(prev => {
      const newButtons = [...prev.Allblog.button];
      newButtons.splice(index, 1);
      return { ...prev, Allblog: { ...prev.Allblog, button: newButtons } };
    });
  };

  if (loading) {
    return (
      <div className="p-10 bg-gray-50">
        <div className="animate-pulse space-y-8">
          {/* Skeleton for tabs */}
          <div className="flex gap-4">
            <div className="h-10 w-24 bg-gray-200 rounded"></div>
            <div className="h-10 w-24 bg-gray-200 rounded"></div>
          </div>

          {/* Skeleton for form/table */}
          <div className="grid grid-cols-2 gap-8">
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>

          {/* Skeleton for table rows */}
          <div className="space-y-4">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 bg-gray-50">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <button
            onClick={fetchBlogs}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-50">
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => {
            setActiveTab('create');
            setBlogData({
              _id: "",
              Allblog: {
                image: "",
                title: "",
                subTitle: "",
                description: "",
                thought: "",
                subImage: "",
                subDescription: "",
                button: [{
                  name: "",
                  link: ""
                }],
                isShow: false
              }
            });
          }}
        >
          Create
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'view' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('view')}
        >
          View All
        </button>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {activeTab === 'create' ? (
        <form onSubmit={blogData._id ? () => handleUpdate(blogData._id) : handleCreate}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block mb-2">Image</label>
              <div
                onClick={() => triggerFileInput('image')}
                className="cursor-pointer"
              >
                {blogData.Allblog.image ? (
                  <img
                    src={blogData.Allblog.image}
                    alt="Blog main"
                    className="w-32 h-32 object-cover border rounded hover:opacity-80"
                  />
                ) : (
                  <div className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-sm">Click to upload image</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Sub Image</label>
              <div
                onClick={() => triggerFileInput('subImage')}
                className="cursor-pointer"
              >
                {blogData.Allblog.subImage ? (
                  <img
                    src={blogData.Allblog.subImage}
                    alt="Blog sub"
                    className="w-32 h-32 object-cover border rounded hover:opacity-80"
                  />
                ) : (
                  <div className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-sm">Click to upload sub image</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={blogData.Allblog.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
   

           
            <div className="mb-4">
              <label className="block mb-2">Thought</label>
              <input
                type="text"
                name="thought"
                value={blogData.Allblog.thought}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Subtitle</label>
              <input
                type="text"
                name="subTitle"
                value={blogData.Allblog.subTitle}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Sub Description</label>
              <textarea
                name="subDescription"
                value={blogData.Allblog.subDescription}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Description</label>
              <textarea
                name="description"
                value={blogData.Allblog.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>


       

            <div className="mb-4">
              <h3 className="text-xl mb-2">Button Settings</h3>
              {blogData.Allblog.button.map((btn, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-2">Button Text</label>
                    <input
                      type="text"
                      name="name"
                      value={btn.name}
                      onChange={(e) => handleButtonChange(index, e)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2">Button Link</label>
                    <input
                      type="text"
                      name="link"
                      value={btn.link}
                      onChange={(e) => handleButtonChange(index, e)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <button type="button" className="bg-red-500 text-white  rounded-md h-10 px-2 mt-8" onClick={() => handleRemoveButton(index)}>Remove Button</button>

                </div>
              ))}
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 mt-3" onClick={handleAddButton}>Add Button</button>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Show Blog</label>
              <input
                type="checkbox"
                name="isShow"
                checked={blogData.Allblog.isShow}
                onChange={(e) => {
                  setBlogData(prev => ({
                    ...prev,
                    Allblog: {
                      ...prev.Allblog,
                      isShow: e.target.checked
                    }
                  }));
                }}
                className="w-4 h-4"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 text-white px-6 py-2 rounded"
          >
            {loading ? (blogData._id ? 'Updating...' : 'Creating...') : (blogData._id ? 'Update Blog' : 'Create Blog')}
          </button>
        </form>
      ) : (
        <div className="overflow-x-auto">
          {blogs.length === 0 ? (
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-gray-200 rounded w-full"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          ) : (
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 border-b text-left">Image</th>
                  <th className="px-6 py-3 border-b text-left">Title</th>
                  <th className="px-6 py-3 border-b text-left">Subtitle</th>
                  <th className="px-6 py-3 border-b text-left">Description</th>
                  <th className="px-6 py-3 border-b text-left">Thought</th>
                  <th className="px-6 py-3 border-b text-left">Sub Image</th>
                  <th className="px-6 py-3 border-b text-left">Sub Description</th>
                  <th className="px-6 py-3 border-b text-left">Button</th>
                  <th className="px-6 py-3 border-b text-left">Status</th>
                  <th className="px-6 py-3 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <img
                        src={blog.Allblog.image}
                        alt={blog.Allblog.title}
                        className="w-[200px] h-auto object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 border-b">{blog.Allblog.title}</td>
                    <td className="px-6 py-4 border-b">{blog.Allblog.subTitle}</td>
                    <td className="px-6 py-4 border-b">{blog.Allblog.description}</td>
                    <td className="px-6 py-4 border-b">{blog.Allblog.thought}</td>
                    <td className="px-6 py-4 border-b">
                      <img
                        src={blog.Allblog.subImage}
                        alt="Sub"
                        className="w-[200px] h-auto object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 border-b">{blog.Allblog.subDescription}</td>
                    <td className="px-6 py-4 border-b">
                      {blog.Allblog.button.map((btn, index) => (
                        <div key={index}>
                          <p>Text: {btn.name}</p>
                          <p>Link: {btn.link}</p>
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 border-b">
                      {blog.Allblog.isShow ? 'Showing' : 'Hidden'}
                    </td>
                    <td className="px-6 py-4 border-b">
                      <button
                        onClick={() => {
                          setBlogData(blog);
                          setActiveTab('create');
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Allblog;
