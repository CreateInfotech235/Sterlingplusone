import { useState } from "react";
import HeaderLogo from "../../assets/logo.png";
import LoginImg from "../../assets/logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router";
import profileIcon from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTelegram,
  FaLinkedin,
  FaPinterestSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
// import Button from "./Button";

function Navbar({ Login, userData }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  // console.log(userData);
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/services", text: "Services" },
    { to: "/blog", text: "Blog" },
    { to: "/contact", text: "Contact" },
    { to: "/about", text: "About" },
  ];

  const getLinkClass = (path, isMobile = false) => {
    const baseClass = `${isMobile ? "block " : ""}px-${
      isMobile ? "3" : "2"
    } py-2 text-gray-900 hover:text-blue-700`;
    return `${baseClass} ${
      location.pathname === path ? "text-blue-700 font-bold" : ""
    }`;
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("merchnatId");
    localStorage.removeItem("userData");
    setIsProfileMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      <div className="bg-[#111827]">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-5 ">
            <div className="w-1/2">
              <p className="text-white font-bold">
                Best courier service provider in the world
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <ul className="flex">
                <li className="pe-5">
                  <FaFacebookF style={{ color: "#fff" }} />
                </li>
                <li className="pe-5">
                  <FaTelegram style={{ color: "#fff" }} />
                </li>
                <li className="pe-5">
                  <FaLinkedin style={{ color: "#fff" }} />
                </li>
                <li className="pe-5">
                  <FaPinterestSquare style={{ color: "#fff" }} />
                </li>
                <li className="pe-5">
                  <FaYoutube style={{ color: "#fff" }} />
                </li>
                <li className="pe-5">
                  <FaInstagram style={{ color: "#fff" }} />
                </li>
                <li className="pe-5">
                  <FaTwitter style={{ color: "#fff" }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img src={HeaderLogo} className="h-12" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex lg:space-x-8 md:space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`${getLinkClass(link.to)} text-[18px]`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Login/Register Section */}
            <div className="flex items-center lg:space-x-4 md:space-x-2">
              <Link
                to="/"
                className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-[10px] py-[5px] md:px-[20px] md:py-[11px] rounded-lg hover:bg-blue-800 whitespace-nowrap ml-5"
              >
                Get a quote
              </Link>

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
          className={`md:hidden ${
            isOpen ? "h-full" : "h-0"
          } overflow-hidden transition-all ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${getLinkClass(link.to, true)} text-[18px]`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
