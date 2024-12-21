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
      
      <div className="w-full relative isolate overflow-hidden bg-gray-900 py-24 sm:py-28 lg:py-36">
        {/* Optional Background Image */}
        {/* <img
    alt=""
    src={Hero}
    className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
  /> */}

        {/* Decorative Gradients */}
        <div
          aria-hidden="true"
          className="hidden sm:block sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[40rem] lg:w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-50"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[40rem] lg:w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-50"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.2] sm:leading-[1.4] capitalize">
              {/* Welcome to Sterlingplus */}
            </h3>
            <h1 className="mt-8 sm:mt-12 text-2xl sm:text-4xl lg:text-6xl uppercase font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.4]">
            BLOG
            </h1>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 font-medium">
            "Here, we share insightful articles, tips, and updates about the
              courier industry, shipping trends, delivery best practices, and
              everything you need to know to make your shipping experience
              smooth and hassle-free. Stay informed with our latest posts and
              discover helpful resources to enhance your understanding of the
              world of courier services."
            </p>
            <div className="mt-6 sm:mt-12">
              <button className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-6 py-3 sm:px-10 sm:py-4 rounded-lg hover:bg-blue-800 whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
  {/* <!-- Main Grid Layout --> */}
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* <!-- Left Content --> */}
    <div class="lg:col-span-2">
      {/* <!-- Article 1 --> */}
      <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img
          src={BlogImg}
          alt="Starcraft Tournament"
          class="w-full object-cover"
        />
      </div>
      {/* <!-- Quote --> */}
      <div class="rounded-lg mt-2 text-2xl font-bold noto small">
        Master Transport Solution
      </div>
      <div class="rounded-lg mt-1 text-xl">
        “Sky-High Speed, Groundbreaking Reliability.”
      </div>
      <div class="rounded-lg mt-1 text-gray-600 text-justify text-base">
        Air transportation refers to the movement of goods and passengers
        through the use of aircraft, such as airplanes, helicopters, and
        drones. It is one of the fastest and most efficient modes of
        transport, especially for long-distance travel or when speed is
        critical. Air cargo services enable the quick delivery of parcels,
        freight, and goods across international and domestic routes, making it
        an essential part of global trade and commerce. Air transportation
        offers reliability, security, and the ability to reach remote or
        hard-to-access locations. It plays a pivotal role in the logistics
        industry, supporting industries such as e-commerce, travel, and supply
        chain management.
      </div>

      <div class="flex flex-col lg:flex-row mt-4 items-center bg-gray-100 rounded-md border">
        <div class="bg-orange-500 h-full rounded-md flex items-center justify-center">
          <div class="px-8 py-10">
            <FaQuoteRight style={{ color: "#fff", fontSize: "50px" }} />
          </div>
        </div>
        <div class="w-full py-6 px-4 text-center">
          <p class="text-lg font-bold">
            "FAST DELIVERIES, NO DELAYS. SECURE, EFFICIENT, AND HASSLE-FREE."
          </p>
          <p class="text-base font-bold">
            "YOUR PARCEL ARRIVES WITH CARE. WE'RE THE COURIER SERVICE YOU CAN RELY ON."
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
      <div class="rounded-lg mt-3 text-gray-600 text-justify text-base">
        Our Ocean Freight Services provide reliable and cost-effective shipping
        solutions for large-scale cargo movement across the globe. Our services
        include full container load (FCL), less than container load (LCL), and
        specialized cargo handling, all supported by real-time tracking for
        peace of mind. Trust us to navigate the complexities of international
        shipping and deliver your goods safely and efficiently by sea.
      </div>

      <div class="flex flex-wrap items-center mt-3 gap-4">
        <div class="flex items-center">
          <span class="mr-2">Follow Us:</span>
          <FaFacebookSquare class="text-xl mr-2" />
          <FaInstagramSquare class="text-xl mr-2" />
          <FaLinkedin class="text-xl mr-2" />
          <FaWhatsappSquare class="text-xl" />
        </div>
        <div class="flex gap-2 flex-wrap">
          <span class="px-6 py-2 rounded-lg border shadow-sm">Cargo</span>
          <span class="px-6 py-2 rounded-lg border shadow-sm">Shipping</span>
          <span class="px-6 py-2 rounded-lg border shadow-sm">Logistic</span>
        </div>
      </div>
    </div>

    {/* <!-- Right Sidebar --> */}
    <div class="lg:sticky lg:top-24 h-fit">
      {/* <!-- Sidebar Top --> */}
      <div>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>

      {/* <!-- Categories --> */}
      <div class="bg-gray-200 mt-4 rounded-lg p-4">
        <h3 class="text-lg font-bold mb-4">Categories</h3>
        <div class="space-y-4">
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
        </div>
      </div>

      <div class="bg-gray-200 mt-4 rounded-lg p-4">
        <h3 class="text-lg font-bold mb-4">Gallery</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img
            src={Gallry1}
            alt="Category 1"
            class="w-full h-[88px] object-cover rounded-md"
          />
          <img
            src={Gallry2}
            alt="Category 2"
            class="w-full h-[88px] object-cover rounded-md"
          />
          <img
            src={Gallry3}
            alt="Category 3"
            class="w-full h-[88px] object-cover rounded-md"
          />
          <img
            src={Gallry4}
            alt="Category 4"
            class="w-full h-[88px] object-cover rounded-md"
          />
          <img
            src={Gallry5}
            alt="Category 5"
            class="w-full h-[88px] object-cover rounded-md"
          />
          <img
            src={Gallry6}
            alt="Category 6"
            class="w-full h-[88px] object-cover rounded-md"
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
