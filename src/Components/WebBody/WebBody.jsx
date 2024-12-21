import React from "react";
import arrow from "../../assets/arraow.png";
import { FaRegStar, FaBox, FaPlay, FaRegClock } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import AIR from "../../assets/Noatum-Logistics_Services_Air_freight_1 1.png";
import ROAD from "../../assets/image (2).png";
import Gateway from "../../assets/image (3).png";
import Ocean from "../../assets/image (4).png";
import Railway_Freight from "../../assets/image (5).png";
import Air_Freight from "../../assets/image (6).png";
import Road_Freight from "../../assets/image (7).png";
import Cranes from "../../assets/image (8).png";
import Containers from "../../assets/image (9).png";
import Boat from "../../assets/image (10).png";
import People1 from "../../assets/image (11).png";
import People2 from "../../assets/image (12).png";
import People3 from "../../assets/image (13).png";
import People4 from "../../assets/image (14).png";
function WebBody() {
  return (
    <div>
      <div className="w-full relative isolate overflow-hidden bg-gray-900 py-12 sm:py-24">
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
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
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
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl tracking-tight text-white leading-tight capitalize">
              Welcome to Sterlingplus
            </h3>
            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-6xl uppercase font-bold tracking-tight text-white leading-tight">
              Full Range Of Transportation Worldwide
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-xl text-gray-300 font-medium">
              Send your parcel from the comfort of your home or office. Whether
              it's a local package or a global shipment, we ensure your
              deliveries arrive on time, every time. With real-time tracking,
              affordable rates, and world-class customer support, trust us to
              handle all your courier needs.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center items-center">
              <button className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-blue-800 whitespace-nowrap">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      <section class="marquee">
        <div class="scroll">
          <div>
            <h3 class="category">logistic</h3>
            <h3 class="category">
              <FaRegStar />
            </h3>
            <h3 class="category">Transport</h3>
            <h3 class="category">
              <FaBox />
            </h3>
            <h3 class="category">Shipping</h3>
            <h3 class="category">
              <FaRegStar />
            </h3>
            <h3 class="category">logistic</h3>
            <h3 class="category">
              <FaBox />
            </h3>
            <h3 class="category">Transport</h3>
            <h3 class="category">
              <FaRegStar />
            </h3>
            {/* <h3 class="category"><a href="https://google.com" target="_blank">Ask Google</a></h3> */}
          </div>
          <div>
            <h3 class="category">logistic</h3>
            <h3 class="category">
              <FaBox />
            </h3>
            <h3 class="category">Transport</h3>
            <h3 class="category">
              <FaRegStar />
            </h3>
            <h3 class="category">Shipping</h3>
            <h3 class="category">
              <FaBox />
            </h3>
            <h3 class="category">logistic</h3>
            <h3 class="category">
              <FaRegStar />
            </h3>
            <h3 class="category">Transport</h3>
            <h3 class="category">
              <FaBox />
            </h3>
            {/* <h3 class="category"><a href="https://google.com" target="_blank">Ask Google</a></h3> */}
          </div>
        </div>
      </section>

      <div class="mb-10">
  <div class="max-w-7xl w-full mx-auto pt-8 px-4">
    <div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left">
        : Our <span class="text-[#904064]">Services</span> :
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* <!-- Left Column: Services --> */}
      <div>
        {/* <!-- Air Freight --> */}
        <div class="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <img
            src={AIR}
            alt="Air Freight"
            class="rounded-lg w-full sm:w-[305px] h-[195px] object-cover"
          />
          <div>
            <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-black small">
              Air Freight Services
            </h3>
            <p class="text-sm sm:text-base text-gray-500 mt-1">
              We offer both domestic and international air freight services,
              making it easier than ever to ship goods across regions.
            </p>
            <a
              href="#"
              class="text-[#322153] text-sm sm:text-base font-semibold mt-2 inline-flex items-center"
            >
              READ MORE
              <span class="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
        {/* <!-- Road Freight --> */}
        <div class="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <img
            src={ROAD}
            alt="Road Freight"
            class="rounded-lg w-full sm:w-[305px] h-[195px] object-cover"
          />
          <div>
            <h3 class="text-lg sm:text-xl md:text-2xl small font-semibold text-black">
              Road Freight Services
            </h3>
            <p class="text-sm sm:text-base text-gray-500 mt-1">
              Enabling seamless transportation for all types of cargo. Whether
              you're shipping within the same country or across borders.
            </p>
            <a
              href="#"
              class="text-[#322153] text-sm sm:text-base font-semibold mt-2 inline-flex items-center"
            >
              READ MORE
              <span class="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
        {/* <!-- Gateway Freight --> */}
        <div class="flex flex-col sm:flex-row items-start gap-4">
          <img
            src={Gateway}
            alt="Gateway Freight"
            class="rounded-lg w-full sm:w-[305px] h-[195px] object-cover"
          />
          <div>
            <h3 class="text-lg sm:text-xl md:text-2xl small font-semibold text-black">
              Gateway Freight Services
            </h3>
            <p class="text-sm sm:text-base text-gray-500 mt-1">
              These hubs act as key transit points where consolidated,
              de-consolidated, processed, then dispatched to their final
              destinations.
            </p>
            <a
              href="#"
              class="text-[#322153] text-sm sm:text-base font-semibold mt-2 inline-flex items-center"
            >
              READ MORE
              <span class="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Right Column: Hero Section --> */}
      <div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold small text-black leading-tight text-center md:text-left">
          Your <span class="text-[#F97316] small">Ocean</span> to Seamless
          <span class="block">Transportation</span>
        </h1>
        <p class="text-sm sm:text-base text-gray-500 mt-4 text-center md:text-left">
          Ocean freight refers to the transportation of goods via sea using
          cargo ships. It is one of the most common and cost-effective methods
          for shipping large quantities of goods across international waters.
        </p>
        <div class="w-full mt-6 h-[280px] sm:h-[350px] md:h-[420px] bg-gray-300 rounded-lg relative overflow-hidden">
          <img
            src={Ocean}
            alt="Ocean Freight"
            class="w-full h-full object-cover"
          />
          {/* <!-- Play Button --> */}
          <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
            <button class="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg">
              <FaPlay style={{ color: "#D23474" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="bg-gray-100 pt-10 pb-20 px-5 ">
        <div className="max-w-7xl w-full mx-auto">
          {/* Header */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left">
              : Our <span className="text-[#904064]">Plans</span> :
            </h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Railway Freight */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={Railway_Freight}
                alt="Railway Freight"
                className="w-full h-[275px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-[38px] noto small text-center font-semibold text-gray-800 mb-2">
                  Railway Freight
                </h3>
                <p className="text-2xl text-center font-bold text-pink-500">
                  $210
                  <span className="text-base font-normal text-gray-600">
                    /250kg
                  </span>
                </p>
                <div className="my-4">
                  <div className="h-1 w-full bg-gray-200 rounded-full relative">
                    <div className="h-1 w-1/2 bg-gray-800 absolute top-0 left-0 rounded-full"></div>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    Real Time Rate Shopping
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    Customs Business Rules
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    150 Freight Shipment/Month
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />1
                    Warehouse
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />3 Year
                    Full Insurance
                  </li>
                </ul>
                <button className="mt-6 w-full bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition">
                  Get Started
                </button>
              </div>
            </div>

            {/* Air Freight */}
            <div className="group bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform scale-y-[1.10] relative transition-colors duration-300 hover:bg-opacity-80">
              <img
                src={Air_Freight}
                alt="Air Freight"
                className="w-full h-[250px] object-cover"
              />
              {/* Hidden background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 z-20 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${Air_Freight})`,
                  height: "500px",
                  width: "100%",
                }}
              ></div>
              <div className="p-6 relative">
                <h3 className="text-[38px] noto small text-center font-semibold mb-2">
                  Air Freight
                </h3>
                <p className="text-2xl text-center font-bold text-orange-400">
                  $270
                  <span className="text-base font-normal text-gray-300">
                    /250kg
                  </span>
                </p>
                <div className="my-4">
                  <div className="h-1 w-full bg-gray-700 rounded-full relative">
                    <div className="h-1 w-3/4 bg-white absolute top-0 left-0 rounded-full"></div>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    Real Time Rate Shopping
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    Customs Business Rules
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    200 Freight Shipment/Month
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />1
                    Warehouse
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    Full Insurance
                  </li>
                </ul>
                <button className="mt-12 w-full bg-[#F97316] text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-400 transition">
                  Get Started
                </button>
              </div>
            </div>

            {/* Road Freight */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={Road_Freight}
                alt="Road Freight"
                className="w-full h-[275px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-[38px] noto small text-center font-semibold text-gray-800 mb-2">
                  Road Freight
                </h3>
                <p className="text-2xl text-center   font-bold text-red-500">
                  $150
                  <span className="text-base font-normal text-gray-600">
                    /250kg
                  </span>
                </p>
                <div className="my-4">
                  <div className="h-1 w-full bg-gray-200 rounded-full relative">
                    <div className="h-1 w-1/4 bg-gray-800 absolute top-0 left-0 rounded-full"></div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    Real Time Rate Shopping
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    Customs Business Rules
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    150 Freight Shipment/Month
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />1
                    Warehouse
                  </li>
                  <li className="flex items-center">
                    <IoCheckmarkDone style={{ marginRight: "3px" }} />
                    1.5 Year Full Insurance
                  </li>
                </ul>
                <button className="mt-6 w-full bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111827]">
        <div class="max-w-7xl w-full mx-auto px-4 py-8">
          {/* <!-- Header Section --> */}
          <div>
            <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left">
              : Why <span className="text-[#904064]">Choose Us</span> :
            </h1>
          </div>

          {/* <!-- Main Content Section --> */}
          <div class="grid md:grid-cols-2 gap-8 items-center">
            {/* <!-- Images Section --> */}
            <div class="space-y-4">
              <div class="rounded-lg overflow-hidden">
                <img src={Cranes} alt="Cranes and Docks" class="w-full" />
              </div>
              <div class="flex gap-4">
                <div class="rounded-lg overflow-hidden">
                  <img
                    src={Containers}
                    alt="Container and Truck"
                    class="w-56"
                  />
                </div>
                <div class="rounded-lg overflow-hidden">
                  <img src={Boat} alt="Cargo Ship" class="w-full" />
                </div>
              </div>
            </div>

            {/* <!-- Text Content Section --> */}
            <div>
              <h3 class="text-4xl font-bold leading-snug text-white ms-4">
                Empowering Your <span class="text-[#F97316]">Business</span>{" "}
                Potential
              </h3>
              <p class="mt-4 text-gray-400 leading-relaxed ms-4">
                We take pride in offering reliable, efficient, and
                customer-focused courier services. We offer competitive and
                transparent pricing, with no hidden fees, so you get great value
                for your money.
              </p>

              {/* <!-- Features Section --> */}
              <div class="grid grid-cols-2 gap-8 mt-8">
                {/* <!-- Feature 1 --> */}
                <div class="flex items-start space-x-4">
                  <div class="text-[#F97316] text-4xl">
                    <i class="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">
                      <AiOutlineGlobal
                        style={{ fontSize: "35px", color: "#F97316" }}
                      />
                    </h4>
                    <h4 class="text-lg font-semibold text-white noto small">
                      Global Network
                    </h4>
                    <p class="text-gray-400 text-sm mt-1 leading-relaxed">
                      We pride ourselves on our vast and reliable global
                      network, ensuring your packages reach any destination
                      across the world, whether it's for urgent documents or
                      bulk shipments.
                    </p>
                  </div>
                </div>

                {/* <!-- Feature 2 --> */}
                <div class="flex items-start space-x-4">
                  <div class="text-[#F97316] text-4xl">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">
                      <FaRegClock
                        style={{ fontSize: "35px", color: "#F97316" }}
                      />
                    </h4>
                    <h4 class="text-lg font-semibold text-white noto small">
                      24 / 7 Hour Support
                    </h4>
                    <p class="text-gray-400 text-sm mt-1 leading-relaxed">
                      We understand to the needs of our customers don’t follow a
                      9-to-5 schedule. That’s why we offer 24/7 hour support to
                      ensure you receive assistance whenever you need it, day or
                      night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto bg-white py-10 px-6">
  {/* Section Heading */}
  <div className="mb-12 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left">
      : Our <span className="text-[#904064]">Team</span> :
    </h1>
  </div>

  {/* Team Members */}
  <div className="flex flex-wrap justify-center gap-10">
    {/* Team Member 1 */}
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="w-48 md:w-64 bg-gray-200 rounded-t-full overflow-hidden">
        <img
          src={People1}
          alt="Alan Willie"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">Alan Willie</h3>
      <p className="text-gray-500">3 year experience</p>
    </div>

    {/* Team Member 2 */}
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="w-48 md:w-64 mt-8 md:mt-24 bg-gray-200 rounded-t-full overflow-hidden">
        <img
          src={People2}
          alt="Amara Willie"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">Amara Willie</h3>
      <p className="text-gray-500">2.5 year experience</p>
    </div>

    {/* Team Member 3 */}
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="w-48 md:w-64 bg-gray-200 rounded-t-full overflow-hidden">
        <img
          src={People3}
          alt="Alex Robert"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">Alex Robert</h3>
      <p className="text-gray-500">4 year experience</p>
    </div>

    {/* Team Member 4 */}
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="w-48 md:w-64 mt-8 md:mt-24 bg-gray-200 rounded-t-full overflow-hidden">
        <img
          src={People4}
          alt="Sarina Jones"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">Sarina Jones</h3>
      <p className="text-gray-500">4.5 year experience</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default WebBody;
