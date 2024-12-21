import React from "react";
import arrow from "../../assets/arraow.png";
import Vectore from "../../assets/image (39).png";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
function Contact() {
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
              CONTACT US
            </h1>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 font-medium">
              "Here, we share insightful articles, tips, and updates about the
              courier industry, shipping trends, delivery best practices, and
              everything you need to know to make your shipping experience
              smooth and hassle-free.Stay informed with our latest posts and
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

      <div className="text-gray-900 flex justify-center">
        <div className="max-w-screen-xl mx-auto m-0 bg-white sm:rounded-lg flex justify-center flex-col sm:flex-row">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex-1">
            {/* <div>
        <img
          src="https://drive.google.com/uc?export=view&id=1MFiKAExRFF0-2YNpAZzIu1Sh52J8r16v"
          alt="Logo"
          className="w-mx-auto"
        />
      </div> */}
            <div className="mt-8 flex flex-col items-center">
              <div className="w-full flex-1">
                <div className="mb-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-gray-600 small noto text-3xl font-medium bg-white transform">
                    Contact Us
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Your Email"
                  />
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    rows={4}
                    cols={50}
                    placeholder="Enter your query here..."
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="mt-5 tracking-wide font-semibold text-white bg-[#F97316] text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-2">Submit Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <img src={Vectore} alt="Illustration" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-16 px-4">
        <div className="flex flex-wrap justify-center gap-10">
          {/* <!-- Team Member 1 --> */}
          <div className="flex w-full sm:w-[416px] md:w-[416px] flex-col items-center bg-[#43426A] rounded-lg py-10 px-8 sm:px-16">
            <h3 className="text-lg font-semibold mt-4 w-14 rounded-full h-14 bg-white flex justify-center items-center">
              <CiLocationOn style={{ color: "#F06829", fontSize: "30px" }} />
            </h3>
            <p className="text-white mt-2 small noto font-bold">
              79, Ocland, New Zealand
            </p>
          </div>

          {/* <!-- Team Member 2 --> */}
          <div className="flex w-full sm:w-[416px] md:w-[416px] mt-10 sm:mt-0 flex-col items-center bg-[#43426A] rounded-lg py-10 px-8 sm:px-16">
            <h3 className="text-lg font-semibold mt-4 w-14 rounded-full h-14 bg-white flex justify-center items-center">
              <IoCallOutline style={{ color: "#F06829", fontSize: "30px" }} />
            </h3>
            <p className="text-white mt-2 small noto font-bold">
              +64 8236514145
            </p>
          </div>

          {/* <!-- Team Member 3 --> */}
          <div className="flex w-full sm:w-[416px] md:w-[416px] flex-col items-center bg-[#43426A] rounded-lg py-10 px-8 sm:px-16">
            <h3 className="text-lg font-semibold mt-4 w-14 rounded-full h-14 bg-white flex justify-center items-center">
              <IoMailOpenOutline
                style={{ color: "#F06829", fontSize: "30px" }}
              />
            </h3>
            <p className="text-white mt-2 small noto font-bold">
              sterlingplusone77@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
