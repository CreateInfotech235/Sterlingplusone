import { useState, useEffect } from "react";
import { fileToBase64 } from "../../Api/Convertbase64";
import axios from "axios";

const Categories = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedBlogs, setSelectedBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [img, setImg] = useState([]); // Holds the uploaded images
    const [titleForCategory, setTitleForCategory] = useState("");
    const [titleForGellery, setTitleForGellery] = useState("");
    const [issaved, setIssaved] = useState(false);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://sterlingplusone-backend-1.onrender.com/web/allblogs");
            const data = await response.json();
            setAllBlogs(data);
            setFilteredBlogs(data);
        } catch (err) {
            console.error("Failed to fetch blogs", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
        fetchBlogPageSideSection();
    }, []);

    const handleSearch = () => {
        if (search.trim()) {
            const filtered = allBlogs.filter((item) =>
                item?.Allblog?.title?.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredBlogs(filtered);
        } else {
            setFilteredBlogs(allBlogs);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [search]);

    const toggleBlogSelection = (id) => {
        setSelectedBlogs((prev) => {
            const updated = [...prev];
            const index = updated.findIndex((blog) => blog.id === id);

            if (index !== -1) {
                updated.splice(index, 1); // Remove if already selected
            } else {
                updated.push({ id, title: "" }); // Add new selection
            }

            return updated;
        });
    };

    const handleTitleChange = (id, newTitle) => {
        setSelectedBlogs((prev) =>
            prev.map((blog) =>
                blog.id === id
                    ? { ...blog, title: newTitle }
                    : blog
            )
        );
    };

    const setdata = async (data) => {
        try {
            const response = await axios.post("https://sterlingplusone-backend-1.onrender.com/web/blogpagesideSection", data);
            setIssaved(false);
        } catch (error) {
            console.log(error);
            setIssaved(false);
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIssaved(true);
        const newData = await selectedBlogs.map((item) => ({
            blogId: item.id,
            title: item.title
        }));

        await newData.forEach((item) => {
            if (item.title === "") {
                return;
            }
        });


        // now add the image

        const blogPageSection = {
            blogPageSection: {
                Categorytitle: titleForCategory,
                gallerytitle: titleForGellery,
                topCategory: newData,
                galleryImage: img
            }
        };

        setdata(blogPageSection)



    };

    const handleNext = () => {
        setCurrentPage(1);
    };

    const addImage = () => {
        setImg((prev) => [
            ...prev,
            "",
        ]);
    };
    // Update the image input handler to properly handle files
    const handleImageChange = async (e, index) => {
        const file = e.target.files[0];
        if (file) {
            try {
                // Using fileToBase64 to get the base64 string
                const base64 = await fileToBase64(file);
                setImg((prev) => {
                    const updatedImages = [...prev];
                    updatedImages[index] = base64; // Update the src of the image at the correct index
                    return updatedImages;
                });
            } catch (error) {
                console.error("Error converting file to base64", error);
            }
        }
    };

    const removeImage = (index) => {
        setImg((prev) => {
            const updatedImages = [...prev];
            updatedImages.splice(index, 1); // Remove the image at the specified index
            return updatedImages;
        });
    };


    const handleTitle = (e, name) => {
        if (name === "titleForCategory") {
            setTitleForCategory(e.target.value);
        }
        if (name === "titleForGellery") {
            setTitleForGellery(e.target.value);
        }
    };


    function gettitelbyid(id) {
        const data = filteredBlogs.find((blog) => blog?._id === id);
        return data?.Allblog?.title || "N/A";
    }



    const fetchBlogPageSideSection = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://sterlingplusone-backend-1.onrender.com/web/blogpagesideSection");
            const data = await response.json();

            // Assuming the API returns a structure similar to the one in your JSON:
            const { Categorytitle, gallerytitle, topCategory, galleryImage } = data.blogPageSideSection;

            setTitleForCategory(Categorytitle || "");
            setTitleForGellery(gallerytitle || "");
            setImg(galleryImage || []);
            setSelectedBlogs(
                topCategory.map((item) => ({
                    id: item.blogId,
                    title: item.title || "",
                }))
            );
        } catch (err) {
            console.error("Failed to fetch blog page side section", err);
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
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 border-b pb-4">
                    Blog Categories
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>

                        <div>

                            <div className="flex justify-end mb-4">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border border-gray-300 rounded-md px-4 py-2"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                            {currentPage === 0 && (
                                <>
                                    <table className="table-auto border-collapse border border-gray-300 w-full">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-6 py-3 border-b">Check</th>
                                                <th className="px-6 py-3 border-b">Title</th>
                                                <th className="px-6 py-3 border-b">Image</th>
                                                <th className="px-6 py-3 border-b">Subtitle</th>
                                                <th className="px-6 py-3 border-b">Sub Image</th>
                                                <th className="px-6 py-3 border-b">Buttons</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredBlogs.map((item) => (
                                                <tr key={item._id}>
                                                    <td className="px-6 py-4 border-b">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-blue-600"
                                                            checked={selectedBlogs.some((blog) => blog.id === item._id)}
                                                            onChange={() =>
                                                                toggleBlogSelection(item._id)
                                                            }
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 border-b">{item?.Allblog?.title || "N/A"}</td>
                                                    <td className="px-6 py-4 border-b">
                                                        {item?.Allblog?.image ? (
                                                            <img
                                                                src={item?.Allblog?.image}
                                                                alt="Blog"
                                                                className="w-16 h-16 object-cover"
                                                            />
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 border-b">{item?.Allblog?.subTitle || "N/A"}</td>
                                                    <td className="px-6 py-4 border-b">
                                                        {item?.Allblog?.subImage ? (
                                                            <img
                                                                src={item?.Allblog?.subImage}
                                                                alt="Sub Image"
                                                                className="w-16 h-16 object-cover"
                                                            />
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 border-b">
                                                        {item?.Allblog?.button?.map((btn, idx) => (
                                                            <span key={btn._id}>
                                                                {`${idx !== 0 ? ", " : ""}${btn.name}`}
                                                            </span>
                                                        ))}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="flex justify-center mt-4">
                                        <button
                                            type="button"
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                            onClick={handleNext}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                        {currentPage === 1 && (
                            <>
                                <table className="table-auto border-collapse border border-gray-300 w-full">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-6 py-3 border-b">Check</th>
                                            <th className="px-6 py-3 border-b">Title</th>
                                            <th className="px-6 py-3 border-b">Title for Top Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedBlogs.map((blog) => (
                                            <tr key={blog?._id} className="h-20 border-b">
                                                <td className="px-6 py-4 flex justify-center h-20">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox h-5 w-5 text-blue-600 "
                                                        checked
                                                        onChange={() => toggleBlogSelection(blog?._id)}
                                                    />
                                                </td>
                                                <td className="px-6 py-4 text-center h-20">{gettitelbyid(blog?.id)}</td>
                                                <td className="px-6 py-4 flex justify-center h-20">
                                                    <input
                                                        type="text"
                                                        className="border border-gray-300 rounded-md px-4 py-2"
                                                        value={blog?.title}
                                                        placeholder="Enter Title for Top Category"
                                                        required={true}
                                                        onChange={(e) => handleTitleChange(blog?.id, e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="button"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                        onClick={() => setCurrentPage(0)}
                                    >
                                        Back
                                    </button>

                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="w-full mt-4">
                            <div className="w-full mt-4">
                                <div className="w-full mt-4">
                                    <div>
                                        <label htmlFor="titleForCategory">Title for Category</label>
                                        <input type="text" placeholder="Enter Title for Category" className="w-full border border-gray-300 rounded-md px-4 py-2" required={true} value={titleForCategory} onChange={(e) => handleTitle(e, "titleForCategory")} />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="titleForGellery">Title for Gellery</label>
                                        <input type="text" placeholder="Enter Title for Gellery" className="w-full border border-gray-300 rounded-md px-4 py-2 " required={true} value={titleForGellery} onChange={(e) => handleTitle(e, "titleForGellery")} />
                                    </div>
                                    <div className="mt-4 flex flex-col">
                                        <div className="mb-4">
                                            <label className="block mb-2">Image</label>
                                            <div className="cursor-pointer flex flex-wrap justify-evenly">
                                                {img.map((image, index) => (
                                                    <div key={index} className="flex justify-center items-center flex-wrap mt-3">
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            onChange={(e) => handleImageChange(e, index)}  // Update the image at the correct index
                                                            id={`img-${index}`}
                                                            accept="image/*"
                                                        />
                                                        {image ? (
                                                            <div className="relative">
                                                                <img
                                                                    src={image}
                                                                    alt="Blog main"
                                                                    className="w-32 h-32 object-cover border rounded hover:opacity-80"
                                                                    // on img click update the image selected input box
                                                                    onClick={() => document.getElementById(`img-${index}`).click()}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeImage(index)}  // Remove the image at the correct index
                                                                    className="absolute top-0 right-0 w-8 h-8 bg-red-500 text-white rounded-full p-1"
                                                                >
                                                                    X
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <label htmlFor={`img-${index}`}>
                                                                <div className="relative w-32 text-center h-32 bg-gray-200 rounded-md cursor-pointer flex justify-center items-center">
                                                                    Click to select image
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeImage(index)}  // Remove the image at the correct index
                                                                        className="absolute top-0 right-0 w-8 h-8 bg-red-500 text-white rounded-full p-1"
                                                                    >
                                                                        X
                                                                    </button>
                                                                </div>
                                                            </label>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <button
                                            type="button"
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                            onClick={() => addImage()}
                                        >
                                            Add Image
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCurrentPage(1)}>
                                        {!issaved ? "Save Changes" : "Saving..."}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div >
    );
};

export default Categories;
