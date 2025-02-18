import { useState, useEffect } from "react";

import BlogImg1 from "../../assets/image (32).png";
import Gallry1 from "../../assets/image (33).png";
import Gallry2 from "../../assets/image (34).png";
import Gallry3 from "../../assets/image (35).png";
import Gallry4 from "../../assets/image (36).png";
import Gallry5 from "../../assets/image (37).png";
import Gallry6 from "../../assets/image (38).png";
import { FaQuoteRight } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { GetBlogByTitle, GetBlogPage, GetDefaultBlog, GetBlogPageSideSection } from "../../Api/Webapi/Getblog";
import { Link } from "react-router";
import { GetNavSection } from "../../Api/Webapi/GetNavSection";

function Blog() {
  const [loading, setLoading] = useState(true);
  const [blogmain, setblogmain] = useState({
    title: "",
    subTitle: "",
    button: {
      name: "",
      link: ""
    }
  });
  const [blogPageSideSection, setBlogPageSideSection] = useState({});
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GetBlogPage();
        const defaultBlog = await GetDefaultBlog();
        const blogPageSideSection = await GetBlogPageSideSection();
        console.log(defaultBlog);
        if (response && response[0]?.blogPage) {
          setblogmain(response[0].blogPage);
        }
        if (defaultBlog?.Allblog) {
          setBlog(defaultBlog.Allblog);
        }
        if (blogPageSideSection) {
          setBlogPageSideSection(blogPageSideSection);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [blog, setBlog] = useState({
    title: "",
    subTitle: "",
    description: "",
    thought: "",
    subDescription: "",
    image: "",
    button: [{
      name: "",
      link: ""
    }]
  });

  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = async () => {
    const response = await GetBlogByTitle(searchTitle);
    if (response) {
      setBlog(response.Allblog);
    }
  };
  console.log(blogPageSideSection);

  const handleTitle = async (id) => {
    const response = await GetBlogByTitle(undefined, id);
    if (response) {
      console.log("response", response.Allblog);
      setBlog(response.Allblog);
    }
  };





  console.log("icon", icon);


  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const response = await GetNavSection();
        setIcon(response.icons
        );
      } catch (error) {
        console.error("Error fetching nav data:", error);
      }
    };
    fetchNavData();
  }, [])








  if (loading) {
    return (
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="w-full bg-gray-900 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="h-12 bg-gray-700 rounded-lg w-3/4 mx-auto mb-6"></div>
              <div className="h-16 bg-gray-700 rounded-lg w-5/6 mx-auto mb-4"></div>
              <div className="h-8 bg-gray-700 rounded-lg w-2/3 mx-auto mb-8"></div>
              <div className="h-12 bg-gray-700 rounded-lg w-48 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Blog Content Skeleton */}
        <div className="max-w-screen-xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>

              <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-96 bg-gray-300 rounded-lg mb-4"></div>
            </div>

            <div className="lg:col-span-1">
              <div className="h-12 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  console.log(blogPageSideSection);
  return (
    <div>

      <div className="w-full relative isolate overflow-hidden py-12 sm:py-24 flex justify-center items-center " style={{ background: `url(${blogmain?.bgImage})` ,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',backgroundColor: "rgba(0, 0, 0, 0.4)",backgroundBlendMode: "multiply", height: window.innerWidth > 768 ? window.innerHeight-230 : null }}>
        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            {/* <h1 className="mt-8 sm:mt-12 text-2xl sm:text-4xl lg:text-6xl uppercase font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.4]" data-aos="fade-up" data-aos-offset="0" data-aos-delay="500" >
              {blogmain?.title}

            </h1> */}
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 font-medium" data-aos="fade-up" data-aos-offset="0" data-aos-delay="600" >
              {blogmain?.subTitle}
            </p>
            {/* <div className="mt-6 sm:mt-12">
              {blogmain?.button?.map((btn, index) => (
                <>
                  <Link to={btn?.link} data-aos="fade-up" data-aos-offset="0" data-aos-delay={700*(index+1)} >
                    <button className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-6 py-3 sm:px-10 sm:py-4 rounded-lg hover:bg-blue-800 whitespace-nowrap">
                      {btn?.name}
                    </button>
                  </Link>
                </>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8" >
        {/* <!-- Main Grid Layout --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- Left Content --> */}
          <div className="lg:col-span-2" >
            {/* <!-- Article 1 --> */}
            <div >
              <img
                src={blog?.image}
                alt="Starcraft Tournament"
                className="w-full object-cover  shadow-lg rounded-lg"
                data-aos="fade-right" data-aos-offset="50" data-aos-delay="600"
              />
            </div>
            {/* <!-- Quote --> */}
            <div className="rounded-lg mt-2 text-2xl font-bold noto small" data-aos="fade-up" data-aos-offset="0" data-aos-delay="700">
              {blog?.title}
            </div>
            <div className="rounded-lg mt-1 text-xl" data-aos="fade-up" data-aos-offset="0" data-aos-delay="800">
              {blog?.subTitle}
            </div>
            <div className="rounded-lg mt-1 text-gray-600 text-justify text-base" data-aos="fade-up" data-aos-offset="0" data-aos-delay="900">
              {blog?.description}
            </div>

            <div className="flex flex-col lg:flex-row mt-4 items-center bg-gray-100 rounded-md border" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1000">
              <div className="bg-orange-500 h-full rounded-md flex items-center justify-center">
                <div className="px-8 py-10">
                  <FaQuoteRight style={{ color: "#fff", fontSize: "50px" }} />
                </div>
              </div>
              <div className="w-full py-6 px-4 text-center">
                <p className="text-lg font-bold">
                  {blog?.thought}
                </p>
              </div>
            </div>

            {/* <!-- Article 2 --> */}
            <div className="bg-gray-800 shadow-lg mt-5 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1100">
              <img
                src={blog?.subImage}
                alt="Dota Madness"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-lg mt-3 text-gray-600 text-justify text-base" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1200">
              {blog?.subDescription}
            </div>

            <div className="flex flex-wrap items-center mt-3 gap-4" data-aos="fade-up" data-aos-offset="0" data-aos-delay="100">
              <div className="flex items-center">
                <span className="mr-2">Follow Us:</span>
                {
                  icon.map((icon, index) => (
                    <Link to={icon?.link} key={index}>
                      <img
                        src={icon?.Image}
                        alt=""
                        className="w-10 h-10 mr-2 grayscale-[100%] invert"
                      />
                    </Link>
                  ))
                }
              </div>
              <div className="flex gap-2 flex-wrap">
                {blog?.button?.map((btn, index) => (
                  <Link to={btn?.link} key={index} className="cursor-pointer">
                    <span className="px-6 py-2 rounded-lg border shadow-sm cursor-pointer">{btn?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* <!-- Right Sidebar --> */}
          <div className="lg:sticky lg:top-24 h-fit" >
            {/* <!-- Sidebar Top --> */}
            <div>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative" data-aos="fade-up" data-aos-offset="50" data-aos-delay="600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  onChange={(e) => setSearchTitle(e.target.value)}
                  value={searchTitle}
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            {/* <!-- Categories --> */}
            <div className="bg-gray-200 mt-4 rounded-lg p-4" data-aos="fade-up"  data-aos-delay="900">
              <h3 className="text-lg font-bold mb-4">{blogPageSideSection?.blogPageSideSection?.Categorytitle || "Categories"}</h3>
              <div className="space-y-4">
                {blogPageSideSection?.blogPageSideSection?.topCategory?.map((category, index) => (
                  <div key={index} className="flex justify-between items-center rounded-lg p-2 bg-white cursor-pointer" onClick={() => { handleTitle(category?.blogId); console.log(category) }}>
                    <span className="text-sm">{category?.title || "Category Name"}</span>
                    <span className="ml-1">&rarr;</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Gallery --> */}
            <div className="bg-gray-200 mt-4 rounded-lg p-4" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1000">
              <h3 className="text-lg font-bold mb-4">{blogPageSideSection?.blogPageSideSection?.gallerytitle || "Gallery"}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {blogPageSideSection?.blogPageSideSection?.galleryImage?.map((image, index) => (
                  <img
                    key={index}
                    src={image || "default-image-path.jpg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[88px] object-cover rounded-md"
                    data-aos="fade-up" data-aos-offset="0" data-aos-delay={(300*(index+1))+1000}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Blog;
