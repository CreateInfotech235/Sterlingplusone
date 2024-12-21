import React from "react";
import Vectore from "../../assets/image (40).png";
import Xpo from "../../assets/image (26).png";
import Logistics from "../../assets/image (27).png";
import Fusion from "../../assets/image (28).png";
import Envista from "../../assets/image (29).png";
import Ant from "../../assets/image (30).png";

function About() {
  return (
    <div>
      <div className="max-w-7xl w-full mx-auto bg-white px-4">
        {/* Header Section */}
        <div className="mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            : About <span className="text-[#904064]">Us</span> :
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {/* Left Section */}
          <div className="flex justify-center items-center">
            <img src={Vectore} alt="Illustration" className="w-full h-auto max-w-xs sm:max-w-md" />
          </div>
          {/* Right Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 leading-snug">
              Reliability Delivered,{" "}
              <span className="text-orange-500">Excellence </span>
              Guaranteed.
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Choose Courier for all your delivery needs, and experience the
              difference of a company that truly cares about your business. We
              understand the importance of time-sensitive deliveries and the
              value of trust.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              Your trusted partner in fast, reliable, and secure delivery
              services. Our mission is simple: to revolutionize the way the
              world connects through seamless and efficient shipping solutions.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start gap-4">
              <button className="px-6 py-2 bg-[#F97316] text-white font-semibold rounded-md">
                Contact Us
              </button>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-phone-alt text-blue-700 mr-2"></i> +64
                8236514145
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
              <div className="flex items-center justify-center flex-col bg-gray-50 shadow rounded-lg p-4">
                <h3 className="text-2xl font-bold text-orange-500">30k +</h3>
                <p className="mt-1 text-gray-600">Premium Outlets</p>
              </div>
              <div className="flex items-center justify-center flex-col bg-gray-50 shadow rounded-lg p-4">
                <h3 className="text-2xl font-bold text-orange-500">80 +</h3>
                <p className="mt-1 text-gray-600">Country's Branch</p>
              </div>
              <div className="flex items-center justify-center flex-col bg-gray-50 shadow rounded-lg p-4">
                <h3 className="text-2xl font-bold text-orange-500">30M +</h3>
                <p className="mt-1 text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-[#F7F7F7] py-16">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8">
              {/* Left Text Section */}
              <div>
                <h3 className="font-semibold text-[23px] uppercase text-gray-800 mb-2 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
                  About Our SterlingPlusOne
                </h3>
                <p className="text-gray-600 mt-10">
                  Founded with a passion for innovation and customer satisfaction,
                  Courier combines cutting-edge technology, a dedicated team, and
                  an ever-growing fleet to ensure your parcels arrive on time
                  every time. Whether you're sending personal packages or managing
                  business deliveries, we are here to make your experience as
                  smooth and hassle-free as possible.
                </p>
              </div>
              {/* Right Progress Section */}
              <div>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-800 font-medium text-[23px]">
                      Air Freight Services
                    </span>
                    <span className="text-gray-800">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div
                      className="bg-[#43426A] h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-800 font-medium text-[23px]">
                      Ocean Freight Services
                    </span>
                    <span className="text-gray-800">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div
                      className="bg-[#43426A] h-2 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-800 font-medium text-[23px]">
                      Road Freight Services
                    </span>
                    <span className="text-gray-800">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div
                      className="bg-[#43426A] h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h1 className="text-3xl sm:text-4xl text-center font-bold mt-4 mb-10">
            : Our <span className="text-[#904064]">Partners</span> :
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-gray-500 sm:gap-12">
            <a href="#" className="flex justify-center items-center">
              <img src={Xpo} alt="" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src={Logistics} alt="" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src={Fusion} alt="" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src={Envista} alt="" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src={Ant} alt="" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src={Xpo} alt="" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
