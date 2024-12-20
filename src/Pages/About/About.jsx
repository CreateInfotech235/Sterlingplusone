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
      <div class="max-w-7xl w-full mx-auto bg-white">
        {/* <!-- Header Section --> */}
        <div className="mt-12">
          <div>
            <h1 className="text-5xl font-bold small">
              : About <span className="text-[#904064]">Us</span> :
            </h1>
          </div>
        </div>

        {/* <!-- Content Section --> */}
        <div class="grid grid-cols-12 gap-6 ">
          {/* <!-- Left Section --> */}
          <div class="col-span-6">
            <div class="rounded-lg">
              <img src={Vectore} alt="Illustration" class="mx-auto" />
            </div>
          </div>
          {/* <!-- Right Section --> */}
          <div class="col-span-6">
            <h2 class="text-2xl small noto text-[41px] font-medium text-gray-800 leading-snug">
              Reliability Delivered,{" "}
              <span class="text-orange-500 small noto">Excellence </span>
              <span className="small noto">Guaranteed.</span>
            </h2>
            <p class="mt-4 text-gray-600">
              Choose Courier for all your delivery needs, and experience the
              difference of a company that truly cares about your business. We
              understand the importance of time-sensitive deliveries and the
              value of trust.
            </p>
            <p class="mt-2 text-gray-600">
              Your trusted partner in fast, reliable, and secure delivery
              services. Our mission is simple: to revolutionize the way the
              world connects through seamless and efficient shipping solutions.
            </p>
            <div class="mt-6 flex items-center gap-4">
              <button class="px-6 py-2 bg-[#F97316] text-white font-semibold rounded-md">
                Contact Us
              </button>
              <div class="flex items-center text-gray-600">
                <i class="fas fa-phone-alt text-blue-700 mr-2"></i> +64
                8236514145
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6 py-6">
              <div class="flex items-center justify-center flex-col bg-gray-50 shadow rounded-lg p-4">
                <h3 class="text-2xl font-bold text-orange-500">30k +</h3>
                <p class="mt-1 text-gray-600">Premium Outlets</p>
              </div>
              <div class="flex items-center justify-center flex-col bg-gray-50 shadow rounded-lg p-4">
                <h3 class="text-2xl font-bold text-orange-500">80 +</h3>
                <p class="mt-1 text-gray-600">Country's Branch</p>
              </div>
              <div class="flex items-center justify-center flex-col bg-gray-50 shadow rounded-lg p-4">
                <h3 class="text-2xl font-bold text-orange-500">30M +</h3>
                <p class="mt-1 text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Statistics Section --> */}

        {/* <!-- Bottom Section --> */}
      </div>
      <div className="bg-[#F7F7F7]">
        <div class="max-w-7xl w-full mx-auto">
          <div class="grid grid-cols-2 gap-6 px-8 py-16 ">
            {/* <!-- Left Text Section --> */}
            <div>
              <h3 class="font-semibold text-[23px] relative uppercase text-gray-800 mb-2 before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
                About Our sterlingplusone
              </h3>
              <p class="text-gray-600 mt-10">
                Founded with a passion for innovation and customer satisfaction,
                Courier combines cutting-edge technology, a dedicated team, and
                an ever-growing fleet to ensure your parcels arrive on time
                every time. Whether you're sending personal packages or managing
                business deliveries, we are here to make your experience as
                smooth and hassle-free as possible.
              </p>
            </div>
            {/* <!-- Right Progress Section --> */}
            <div>
              <div class="mb-4">
                <div class="flex justify-between">
                  <span class="text-gray-800 font-medium small noto text-[23px]">
                    Air Freight Services
                  </span>
                  <span class="text-gray-800">60%</span>
                </div>
                <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    class="bg-[#43426A] h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="flex justify-between">
                  <span class="text-gray-800 font-medium small noto text-[23px]">
                    Ocean Freight Services
                  </span>
                  <span class="text-gray-800">50%</span>
                </div>
                <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    class="bg-[#43426A] h-2 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="flex justify-between">
                  <span class="text-gray-800 font-medium small noto text-[23px]">
                    Road Freight Services
                  </span>
                  <span class="text-gray-800">80%</span>
                </div>
                <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    class="bg-[#43426A] h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <section class="bg-white dark:bg-gray-900">
              <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <div>
                  <h1 className="text-5xl text-center font-bold small mt-4 mb-10">
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

export default About;
