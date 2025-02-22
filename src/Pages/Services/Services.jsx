import React, { useState, useEffect, useRef } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { GetServiceMain, GetService } from "../../Api/Webapi/GetServices";
import { Link } from "react-router";
import $ from 'jquery';
import 'jquery.ripples';
import Partners from "../Partners/Partners";
import bg from "../../assets/Screenshot_2024-12-18_1655261.png";

function Services() {
  const [heroData, setHeroData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);



  const heroRef = useRef(null);

  const rippl = (id) => {
    $(id).ripples({
      dropRadius: 10,        // Size of the ripple drops
      perturbance: 0.03,     // Intensity of the ripple effect
      interactive: true,     // Enables interaction with the mouse
      speed: 0.5,            // Speed of the ripple animation
      color: 'rgba(255, 255, 255, 0.5)', // Ripple color
      opacity: 0.5,          // Opacity of the ripple effect
      delay: 0.5,            // Delay before the ripple starts
      duration: 1,         // Duration of the ripple animation
      size: 10               // Size of the ripple effect
    });

  }



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





  useEffect(() => {
    console.log(heroData, "bg");

    if (heroData?.bgImage) {
      const imgurl = heroData?.bgImage;
      const img = new Image();
      img.src = imgurl;
      img.onload = () => {
        console.log("123");

        $("#heroData").ripples('destroy');
        const showRipple = heroRef.current;
        showRipple.style.backgroundImage = `url(${img.src})`;
        setTimeout(() => {
          rippl('#heroData');
        }, 10)
      }
    }
  }, [heroData])

  useEffect(() => {
    rippl('#heroData');
  }, [loading])

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



      <div className={`w-full relative isolate overflow-hidden py-12 sm:py-24 flex justify-center items-center `} ref={heroRef} id="heroData" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: window.innerWidth > 768 ? window.innerHeight - 230 : window.innerHeight - 300 }}>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full absolute " style={{ zIndex: '11' }}>
          <div className="text-center">
            <p className="mt-4 text-sm sm:text-base lg:text-xl text-gray-300 font-medium" data-aos="zoom-in-up" data-aos-delay={1100}>
              {heroData?.subTitle}
            </p>
          </div>
        </div>
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-10">
        </div>
      </div>






      {/* <div className="w-full relative isolate overflow-hidden py-12 sm:py-24 flex justify-center items-center " id="heroData" ref={heroRef} style={{ background: `url(${bg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "rgba(0, 0, 0, 0.4)", backgroundBlendMode: "multiply", height: window.innerWidth > 768 ? window.innerHeight - 230 : null }}>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  z-10" style={{ position: "absolute", zIndex: 12 }}>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.2] sm:leading-[1.4] capitalize">
            </h3>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 font-medium" data-aos="fade-up" data-aos-offset="100" data-aos-delay="300" >
              {heroData?.subTitle}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 " style={{zIndex: '11'}}></div>
      </div> */}

      <div className="max-w-7xl w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden cscale5" data-aos="fade-up" data-aos-offset="200" data-aos-delay={200 * (index + 1)} >
              <div className="relative ">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40" >
                  <div className="flex items-center gap-4"  >
                    <div className="w-20 h-20 bg-white bg-opacity-40 rounded-full flex items-center justify-center shadow-lg" data-aos="zoom-out" data-aos-delay={300 * (index + 1.5)} >
                      <div className="w-16 h-16 bg-white  rounded-full flex items-center justify-center shadow-lg" data-aos="zoom-out" data-aos-delay={350 * (index + 1.5)} >
                        <GiCommercialAirplane style={{ color: "#F97316", fontSize: "30px" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 text-justify">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>
                {/* <Link
                  to={service.button.link}
                  className="text-indigo-600 font-semibold flex items-center"
                >
                  {service.button.name}
                  <span className="ml-1">&rarr;</span>
                </Link> */}
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
