import React from "react";
import arrow from "../../assets/arraow.png";
import BlogImg from "../../assets/image (31).png";
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
function Blog() {
  return (
    <div>
      <div className="w-full relative isolate overflow-hidden bg-gray-900 py-24 sm:pt-28 sm:pb-36">
        {/* <img
          alt=""
          src={Hero}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        /> */}
        {/* <div className="absolute inset-0 z-1 bg-black opacity-50"></div> */}
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-50"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-50"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl lg:mx-0 mx-auto">
            <h3 className="text-2xl md:text-3xl text-center lg:text-5xl tracking-tight text-white leading-[1.2] md:leading-[1.4]  z-10 relative capitalize">
              {/* Welcome to Sterlingplus */}
            </h3>
            <h1 className="text-2xl z-10 mt-32 relative text-center pt-12 md:text-3xl lg:text-6xl uppercase font-bold tracking-tight text-white leading-[1.2] md:leading-[1.4]">
              BLOG
            </h1>
            <p className="mt-4 text-center md:mt-8 z-10 relative text-base md:text-lg lg:text-xl text-gray-300 font-medium">
              "Here, we share insightful articles, tips, and updates about the
              courier industry, shipping trends, delivery best practices, and
              everything you need to know to make your shipping experience
              smooth and hassle-free.Stay informed with our latest posts and
              discover helpful resources to enhance your understanding of the
              world of courier services."
            </p>
            <p
              className="mt-4 text-center md:mt-14 text-base md:text-lg lg:text-xl text-gray-300 font-medium relative z-[9999] "
              style={{
                position: "relative",
              }}
            >
              <span
                style={{
                  content: "''",
                  position: "absolute",
                  left: "63%",
                  top: "-20px",
                  transform: "rotate(354deg)",
                  width: "10rem", // Adjust size (e.g., 12px = 3rem)
                  height: "10rem",
                  backgroundImage: `url(${arrow})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></span>

              <button className="bg-gradient-to-b mb-10 from-custom-blue to-custom-pink text-white px-[15px] py-[5px] md:px-[30px] md:py-[15px] rounded-lg hover:bg-blue-800 whitespace-nowrap ml-5">
                Get Started
              </button>
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto py-8">
        {/* <!-- Main Grid Layout --> */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- Left Content --> */}
          <div class="lg:col-span-2">
            {/* <!-- Article 1 --> */}
            <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={BlogImg}
                alt="Starcraft Tournament"
                class="w-full  object-cover"
              />
            </div>

            {/* <!-- Quote --> */}
            <div class=" rounded-lg mt-2 text-[24px] font-bold noto small">
              Master Transport Solution
            </div>
            <div class=" rounded-lg mt-1 text-[20px]">
              “Sky-High Speed, Groundbreaking Reliability.”
            </div>
            <div class=" rounded-lg mt-1 text-[#696969] text-justify">
              Air transportation refers to the movement of goods and passengers
              through the use of aircraft, such as airplanes, helicopters, and
              drones. It is one of the fastest and most efficient modes of
              transport, especially for long-distance travel or when speed is
              critical. Air cargo services enable the quick delivery of parcels,
              freight, and goods across international and domestic routes,
              making it an essential part of global trade and commerce.Air
              transportation offers reliability, security, and the ability to
              reach remote or hard-to-access locations. It plays a pivotal role
              in the logistics industry, supporting industries such as
              e-commerce, travel, and supply chain management.
            </div>

            <div
              className="flex mt-4 items-center w-full bg-[#F8F8F8] rounded-md"
              style={{
                borderImage: "linear-gradient(to right, white, black) 1",
              }}
            >
              <div class="bg-[#F97316] h-full rounded-md flex items-center justify-center">
                <div className="px-10 py-12">
                  <FaQuoteRight style={{ color: "#fff", fontSize: "50px" }} />
                </div>
              </div>
              <div
                class="ml-4 w-full border-2 py-12 rounded-lg  border-gray-300"
                style={{
                  borderImage: "linear-gradient(to right, white, black) 1",
                }}
              >
                <p class="text-lg font-bold text-center">
                  "FAST DELIVERIES, NO DELAYS.SECURE, EFFICIENT, AND
                  HASSLE-FREE.
                </p>
                <p class="text-base text-center font-bold">
                  YOUR PARCEL ARRIVES WITH CARE.WE'RE THE COURIER SERVICE YOU
                  CAN RELY ON."
                </p>
              </div>
            </div>
            {/* <!-- Article 2 --> */}
            <div class="bg-gray-800 shadow-lg mt-5 rounded-lg overflow-hidden">
              <img
                src={BlogImg1}
                alt="Dota Madness"
                class="w-full object-cover"
              />
            </div>
            <div class=" rounded-lg mt-3 text-[#696969] text-justify">
              Our Ocean Freight Services provide reliable and cost-effective
              shipping solutions for large-scale cargo movement across the
              globe.Our services include full container load (FCL), less than
              container load (LCL), and specialized cargo handling, all
              supported by real-time tracking for peace of mind. Trust us to
              navigate the complexities of international shipping and deliver
              your goods safely and efficiently by sea.
            </div>

            <div className="flex items-center mt-3">
              <div className="w-1/2">
                <ul className="flex items-center">
                  <li className="me-2">Follow Us :</li>
                  <li className="me-2">
                    <FaFacebookSquare style={{ fontSize: "20px" }} />
                  </li>
                  <li className="me-2">
                    <FaInstagramSquare style={{ fontSize: "20px" }} />
                  </li>
                  <li className="me-2">
                    <FaLinkedin style={{ fontSize: "20px" }} />
                  </li>
                  <li className="me-2">
                    <FaWhatsappSquare style={{ fontSize: "20px" }} />
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul className="flex justify-end">
                  <li className="px-6 rounded-lg border shadow-sm ms-3 py-2">
                    Cargo
                  </li>
                  <li className="px-6 rounded-lg border shadow-sm ms-3 py-2">
                    Shipping
                  </li>
                  <li className="px-6 rounded-lg border shadow-sm ms-3 py-2">
                    Logistic
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Right Sidebar --> */}
          <div className="lg:sticky lg:top-[96px] h-fit">
            {/* <!-- Sidebar Top --> */}
            <div>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>

            {/* <!-- Categories --> */}
            <div class="bg-[#ECECEC] mt-4  rounded-lg p-4">
              <h3 class="text-lg font-bold noto small mb-4">
                <i class="fas fa-play mr-2"></i> Categories
              </h3>
              <div class="mt-6 space-y-4">
                <div class="flex justify-between items-center rounded-lg p-2 bg-white">
                  <span class="text-sm">Trucking</span>
                  <span class="ml-1">&rarr;</span>
                </div>
                <div class="flex justify-between items-center p-2 rounded-lg bg-white">
                  <span class="text-sm">Transporting</span>
                  <span class="ml-1">&rarr;</span>
                </div>
                <div class="flex justify-between items-center p-2 rounded-lg bg-white">
                  <span class="text-sm">Storage</span>
                  <span class="ml-1">&rarr;</span>
                </div>
                <div class="flex justify-between items-center p-2 rounded-lg bg-white">
                  <span class="text-sm">Trucking</span>
                  <span class="ml-1">&rarr;</span>
                </div>
                <div class="flex justify-between items-center p-2 rounded-lg bg-white">
                  <span class="text-sm">Transporting</span>
                  <span class="ml-1">&rarr;</span>
                </div>
                <div class="flex justify-between items-center p-2 rounded-lg bg-white">
                  <span class="text-sm">Storage</span>
                  <span class="ml-1">&rarr;</span>
                </div>
              </div>
            </div>
            <div class="bg-[#ECECEC] mt-4 rounded-lg p-4">
              <h3 class="text-lg font-bold noto small mb-4">
                <i class="fas fa-play mr-2"></i> Categories
              </h3>
              <div class="grid grid-cols-3 gap-4">
                {/* <!-- Image 1 --> */}
                <img
                  src={Gallry1}
                  alt="Category 1"
                  class="w-[120px] h-[88px] object-cover rounded-md"
                />
                {/* <!-- Image 2 --> */}
                <img
                  src={Gallry2}
                  alt="Category 2"
                  class="w-[120px] h-[88px] object-cover rounded-md"
                />
                {/* <!-- Image 3 --> */}
                <img
                  src={Gallry3}
                  alt="Category 3"
                  class="w-[120px] h-[88px] object-cover rounded-md"
                />
                {/* <!-- Image 4 --> */}
                <img
                  src={Gallry4}
                  alt="Category 4"
                  class="w-[120px] h-[88px] object-cover rounded-md"
                />
                {/* <!-- Image 5 --> */}
                <img
                  src={Gallry5}
                  alt="Category 5"
                  class="w-[120px] h-[88px] object-cover rounded-md"
                />
                {/* <!-- Image 6 --> */}
                <img
                  src={Gallry6}
                  alt="Category 6"
                  class="w-[120px] h-[88px] object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
