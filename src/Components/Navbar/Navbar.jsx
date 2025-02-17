import { useEffect, useState } from "react";
import HeaderLogo from "../../assets/sterlingplusone_logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router";

import { GetNavSection } from "../../Api/Webapi/GetNavSection";
import { GetManuSection } from "../../Api/Webapi/GetmanuSection";
// import Button from "./Button";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(null);
  const [manu, setManu] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLinkClass = (path, isMobile = false) => {
    const baseClass = `${isMobile ? "block " : ""}px-${isMobile ? "3" : "2"
      } py-2 text-gray-900 hover:text-blue-700`;
    return `${baseClass} ${location.pathname === path ? "text-blue-700 font-bold" : ""
      }`;
  };
;

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const response = await GetNavSection();
        setNav(response);
      } catch (error) {
        console.error("Error fetching nav data:", error);
      }
      setLoading(false);
    };
    fetchNavData();
  }, []);

  useEffect(() => {
    const fetchManuData = async () => {
      try {
        const response = await GetManuSection();
        setManu(response);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchManuData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-200 h-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="w-32 h-8 bg-gray-300 rounded"></div>
              <div className="hidden md:flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-20 h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#111827]" >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center py-5" >
            <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0"  data-aos="zoom-in-left">
              <p className="text-white font-bold">
                {nav?.title || <div className="w-48 h-4 bg-gray-300 rounded animate-pulse"></div>}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end" >
              <ul className="flex flex-wrap justify-center">
                {nav?.icons ? (
                  nav.icons.map((icon, index) => (
                    <Link key={index} to={icon.link} target="_blank">
                      <li className="pe-5" data-aos="zoom-in" data-aos-delay={index * 100}>
                        <img src={icon.Image} alt={`Icon ${index + 1}`} className="w-6 h-6" />
                      </li>
                    </Link>
                  ))
                ) : (
                  [1, 2, 3].map((i) => (
                    <li key={i} className="pe-5">
                      <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <Link to={manu?.logo?.path || "/"} className="flex-shrink-0" data-aos="zoom-in-left" data-aos-delay={450}>
                {manu?.logo?.img ? (
                  <img src={manu?.logo?.img} className="h-16" alt="Logo" />
                ) : (
                  <div className="w-40 h-16 bg-gray-300 rounded animate-pulse"></div>
                )}
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex lg:space-x-8 md:space-x-4">
                {manu?.menuList ? (
                  manu.menuList.map((link, index) => (
                    <Link
                      key={link._id}
                      to={link.path}
                      className={`${getLinkClass(link.path)} text-[18px]`}
                      data-aos="zoom-in" data-aos-delay={index * 100}
                    >
                      {link.name}
                    </Link>
                  ))
                ) : (
                  [1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
                  ))
                )}
              </div>
            </div>

            {/* Login/Register Section */}
            <div className="flex items-center lg:space-x-4 md:space-x-2">
              {manu?.button ? (
                <Link
                  to={manu.button.link}
                  className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-[10px] py-[5px] md:px-[20px] md:py-[11px] rounded-lg hover:bg-blue-800 whitespace-nowrap ml-5"
                  data-aos="zoom-in" data-aos-delay={450}
                >
                  {manu.button.text}
                </Link>
              ) : (
                <div className="w-32 h-10 bg-gray-300 rounded animate-pulse ml-5"></div>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden ml-1 p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
                
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isOpen ? "h-full" : "h-0"
            } overflow-hidden transition-all ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {manu?.menuList ? (
              manu.menuList.map((link) => (
                <Link
                  key={link._id}
                  to={link.path}
                  className={`${getLinkClass(link.path, true)} text-[18px]`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))
            ) : (
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-8 bg-gray-300 rounded animate-pulse mb-2"></div>
              ))
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
