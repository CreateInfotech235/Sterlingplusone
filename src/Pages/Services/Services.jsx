import React, { useState, useEffect } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { GetServiceMain, GetService } from "../../Api/Webapi/GetServices";
import { Link } from "react-router";
import Partners from "../Partners/Partners";

function Services() {
  const [heroData, setHeroData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetServiceMain();
        const serviceData = await GetService();
        setHeroData(data.servicesPage);
        setServicesData(serviceData?.servicesPageSection?.services || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="w-full bg-gray-900 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="h-12 bg-gray-700 rounded-lg w-3/4 mx-auto mb-6"></div>
              <div className="h-16 bg-gray-700 rounded-lg w-5/6 mx-auto mb-4"></div>
              <div className="h-8 bg-gray-700 rounded-lg w-2/3 mx-auto mb-8"></div>
              <div className="h-12 bg-gray-700 rounded-lg w-48 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Services Grid Skeleton */}
        <div className="max-w-7xl w-full mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden">
                <div className="h-52 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full relative isolate overflow-hidden bg-gray-900 py-24 sm:py-28 lg:py-36">
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
              {heroData?.title}
            </h1>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 font-medium">
              {heroData?.subTitle}
            </p>
            <div className="mt-6 sm:mt-12">
              <Link to={heroData?.button?.link}>
                <button className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-6 py-3 sm:px-10 sm:py-4 rounded-lg hover:bg-blue-800 whitespace-nowrap">
                  {heroData?.button?.name}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-center">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                  <button className="w-20 h-20 bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg">
                    <GiCommercialAirplane style={{ color: "#F97316", fontSize: "30px" }} />
                  </button>
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <GiCommercialAirplane style={{ color: "#D23474" }} />
                  </button>
                </div>
              </div>
              <div className="py-6 text-justify">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.button.link}
                  className="text-indigo-600 font-semibold flex items-center"
                >
                  {service.button.name}
                  <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Partners />
    </div>
  );
}

export default Services;
