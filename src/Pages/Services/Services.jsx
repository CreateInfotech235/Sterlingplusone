import React from "react";
import arrow from "../../assets/arraow.png";
import { GiCommercialAirplane, GiSpeedBoat } from "react-icons/gi";
import { IoMdBoat } from "react-icons/io";
import { FaTruck, FaWarehouse } from "react-icons/fa";
import { GiShipWheel } from "react-icons/gi";
import Hero from "../../assets/image (20).png";
import Transportation from "../../assets/image (21).png";
import Road_Transportation from "../../assets/image (22).png";
import Ocean_Transportation from "../../assets/image (23).png";
import Warhorse_Services from "../../assets/image (24).png";
import Personal_Transportation from "../../assets/image (25).png";
import Xpo from "../../assets/image (26).png";
import Logistics from "../../assets/image (27).png";
import Fusion from "../../assets/image (28).png";
import Envista from "../../assets/image (29).png";
import Ant from "../../assets/image (30).png";
function Services() {
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
              SERVICES
            </h1>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 font-medium">
              "Our services include local and international parcel deliveries,
              express shipping, tracking solutions, and specialized delivery
              options such as same-day or next-day delivery. We ensure secure
              handling, timely dispatch, and real-time tracking, keeping you
              updated throughout the entire delivery process."
            </p>
            <div className="mt-6 sm:mt-12">
              <button className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-6 py-3 sm:px-10 sm:py-4 rounded-lg hover:bg-blue-800 whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl w-full mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-center ">
          {/* <!-- Air Transportation Card --> */}
          <div class="bg-white rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src={Transportation}
                alt="Air Transportation"
                class="w-full h-52 object-cover"
              />

              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <button class="w-20 h-20 bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg">
                  <GiCommercialAirplane
                    style={{ color: "#F97316", fontSize: "30px" }}
                  />
                </button>
                <button class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <GiCommercialAirplane style={{ color: "#D23474" }} />
                </button>
              </div>
            </div>
            <div class="py-6 text-justify">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Air Transportation
              </h3>
              <p class="text-gray-600 text-sm mb-6">
                We offer expedited delivery options that guarantee your
                shipments reach their destination in the shortest possible time,
                no matter where in the world they need to go.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold flex items-center"
              >
                Read More
                <span class="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* <!-- Road Transportation Card --> */}
          <div class="bg-white rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src={Road_Transportation}
                alt="Road Transportation"
                class="w-full h-52 object-cover"
              />
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <button class="w-20 h-20 bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg">
                  <FaTruck style={{ color: "#F97316", fontSize: "30px" }} />
                </button>
                <button class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <IoMdBoat style={{ color: "#D23474" }} />
                </button>
              </div>
            </div>
            <div class="py-6 text-justify">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Road Transportation
              </h3>
              <p class="text-gray-600 text-sm mb-6">
                Whether you're moving small packages, bulk goods, or large
                freight, we provide seamless road delivery services tailored to
                your needs.We understand that every shipment is unique.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold flex items-center"
              >
                Read More
                <span class="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* <!-- Sea Transportation Card --> */}
          <div class="bg-white rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src={Ocean_Transportation}
                alt="Sea Transportation"
                class="w-full h-52 object-cover"
              />
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <button class="w-20 h-20 bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg">
                  <IoMdBoat style={{ color: "#F97316", fontSize: "30px" }} />
                </button>
                <button class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <IoMdBoat style={{ color: "#D23474" }} />
                </button>
              </div>
            </div>
            <div class="py-6 text-justify">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Sea Transportation
              </h3>
              <p class="text-gray-600 text-sm mb-6">
                Whether you’re sending large freight, containers, or goods that
                require special handling, we ensure a smooth and efficient
                process from port to port.We offer a range of ocean freight
                solutions tailored to your needs.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold flex items-center"
              >
                Read More
                <span class="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src={Warhorse_Services}
                alt="Sea Transportation"
                class="w-full h-52 object-cover"
              />
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <button class="w-20 h-20 bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg">
                  <FaWarehouse style={{ color: "#F97316", fontSize: "30px" }} />
                </button>
                <button class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <FaWarehouse style={{ color: "#D23474" }} />
                </button>
              </div>
            </div>
            <div class="py-6 text-justify">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Sea Transportation
              </h3>
              <p class="text-gray-600 text-sm mb-6">
                Whether you’re sending large freight, containers, or goods that
                require special handling, we ensure a smooth and efficient
                process from port to port.We offer a range of ocean freight
                solutions tailored to your needs.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold flex items-center"
              >
                Read More
                <span class="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src={Personal_Transportation}
                alt="Sea Transportation"
                class="w-full h-52 object-cover"
              />
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <button class="w-20 h-20 bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg">
                  <GiShipWheel style={{ color: "#F97316", fontSize: "30px" }} />
                </button>
                <button class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <GiShipWheel style={{ color: "#D23474" }} />
                </button>
              </div>
            </div>
            <div class="py-6 text-justify">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Sea Transportation
              </h3>
              <p class="text-gray-600 text-sm mb-6">
                Whether you’re sending large freight, containers, or goods that
                require special handling, we ensure a smooth and efficient
                process from port to port.We offer a range of ocean freight
                solutions tailored to your needs.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold flex items-center"
              >
                Read More
                <span class="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left">
              : Our <span className="text-[#904064]">Partners</span> :
            </h1>
          </div>
          <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" class="flex justify-center items-center">
              <img src={Xpo} alt="" srcset="" />
            </a>
            <a href="#" class="flex justify-center items-center">
              <img src={Logistics} alt="" srcset="" />
            </a>
            <a href="#" class="flex justify-center items-center">
              <img src={Fusion} alt="" srcset="" />
            </a>

            <a href="#" class="flex justify-center items-center">
              <img src={Envista} alt="" srcset="" />
            </a>
            <a href="#" class="flex justify-center items-center">
              <img src={Ant} alt="" srcset="" />
            </a>
            <a href="#" class="flex justify-center items-center">
              <img src={Xpo} alt="" srcset="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
