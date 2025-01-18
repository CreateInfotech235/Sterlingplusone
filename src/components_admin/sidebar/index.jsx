/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import SidebarCard from "../../components_admin/sidebar/componentsrtl/SidebarCard";
import routes from "../../routes.jsx";
import { GetManuSection } from "../../Api/Webapi/GetmanuSection.js";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Sidebar = ({ open, onClose }) => {
  const [manu, setManu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManuData = async () => {
      try {
        const response = await GetManuSection();
        setManu(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchManuData();
  }, []);

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <Link to="/admin/default">
            {loading ? (
              <div className="w-[150px] h-[50px] animate-pulse bg-gray-200 rounded"></div>
            ) : (
              <img src={manu?.logo?.img} alt="logo" srcSet="" className="w-[150px]" />
            )}
          </Link>
        </div>
      </div>
      <div className="mt-[150px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        <SidebarCard />
      </div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
