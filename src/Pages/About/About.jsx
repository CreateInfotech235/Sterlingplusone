import React, { useState, useEffect, useRef } from "react";
import Vectore from "../../assets/image (40).png";
import Xpo from "../../assets/image (26).png";
import Logistics from "../../assets/image (27).png";
import Fusion from "../../assets/image (28).png";
import Envista from "../../assets/image (29).png";
import Ant from "../../assets/image (30).png";
import { GetAboutPage, GetAbouttopMain } from "../../Api/Webapi/GetAboutsection";
import Partners from "../Partners/Partners";
import { Link } from "react-router";



import $ from 'jquery';
import 'jquery.ripples';

import bg from "../../assets/Screenshot_2024-12-18_1655261.png";


function About() {
  const heroRef = useRef(null);

  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [abouttopData, setAbouttopData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAboutPage();
        setAboutData(data[0]?.aboutAs);
        const abouttopData = await GetAbouttopMain();
        setAbouttopData(abouttopData?.abouttopAs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);




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
    console.log(abouttopData, "bg");

    if (abouttopData?.bgImage) {
      const imgurl = abouttopData?.bgImage;
      const img = new Image();
      img.src = imgurl;
      img.onload = () => {
        console.log("123");

        $("#abouttop").ripples('destroy');
        const showRipple = heroRef.current;
        showRipple.style.backgroundImage = `url(${img.src})`;
        setTimeout(() => {
          rippl('#abouttop');
        }, 10)
      }
    }
  }, [abouttopData])

  useEffect(() => {
    rippl('#abouttop');
  }, [loading])





  if (loading) {
    return (
      <div className="animate-pulse">
        {/* Header Section Skeleton */}
        <div className="max-w-7xl w-full mx-auto bg-white px-4">
          <div className="mt-12">
            <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>

          {/* Content Section Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {/* Left Section Skeleton */}
            <div className="flex justify-center items-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
            </div>
            {/* Right Section Skeleton */}
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>

              <div className="flex gap-4 mb-6">
                <div className="h-10 bg-gray-200 rounded w-32"></div>
                <div className="h-10 bg-gray-200 rounded w-40"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Statistics Section Skeleton */}
          <div className="bg-gray-50 py-16 mt-12">
            <div className="max-w-7xl w-full mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8">
                <div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-24 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item}>
                      <div className="flex justify-between mb-2">
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section Skeleton */}
          <Partners />
        </div>
      </div>
    );
  }

  if (!aboutData) return null;

  return (
    <div>

      <div className={`w-full relative isolate overflow-hidden py-12 sm:py-24 flex justify-center items-center `} ref={heroRef} id="abouttop" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: window.innerWidth > 768 ? window.innerHeight - 230 : window.innerHeight - 300 }}>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full absolute " style={{ zIndex: '11' }}>
          <div className="text-center">
            <p className="mt-4 text-sm sm:text-base lg:text-xl text-gray-300 font-medium" data-aos="zoom-in-up" data-aos-delay={1100}>
              {abouttopData?.subTitle}
            </p>
          </div>
        </div>
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-10">
        </div>
      </div>




      <div className="max-w-7xl w-full mx-auto bg-white px-4">
        {/* Header Section */}
        <div className="mt-12" data-aos="fade-left" data-aos-delay="500">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold "  >
            : {aboutData?.mainTitle?.split(' ')[0] || ''} <span className="text-[#904064] mx-2">{aboutData?.mainTitle?.split(' ')[1] || ''}</span> {aboutData?.mainTitle?.split(' ').slice(2, aboutData?.mainTitle?.split(' ').length).join(' ') || ''} :
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {/* Left Section */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-delay="500">
            <img src={aboutData.image || Vectore} alt="Illustration" className="w-full h-auto max-w-xs sm:max-w-md" />
          </div>
          {/* Right Section */}
          <div className="text-center sm:text-left" data-aos="fade-left" data-aos-delay="500">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 leading-snug">
              : {aboutData?.title?.split(' ').slice(0, 2).join(' ') || ''} <span className="text-[#904064] mx-2">{aboutData?.title?.split(' ')[2] || ''}</span> {aboutData?.title?.split(' ').slice(3, aboutData?.title?.split(' ').length).join(' ') || ''} :
            </h2>
            {aboutData.description.map((desc, index) => (
              <p key={index} className="mt-4 text-gray-600 text-lg">
                {desc}
              </p>
            ))}
            <div className="mt-6 flex justify-center sm:justify-start gap-4">
              <Link to={aboutData.button.link} className="px-6 py-2 bg-[#F97316] text-white font-semibold rounded-md cscale5">
                {aboutData.button.name}
              </Link>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-phone-alt text-blue-700 mr-2"></i>
                {aboutData.contectNumber}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
              {aboutData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-center flex-col bg-gray-50 shadow rounded-lg p-4 cscale5" data-aos="zoom-in" data-aos-delay={(250 * (index + 1)) + 500}>
                  <h3 className="text-2xl font-bold text-orange-500">{achievement.title}</h3>
                  <p className="mt-1 text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-[#F7F7F7] py-16 cscale3" data-aos="fade-up" data-aos-delay="500">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8">
              {/* Left Text Section */}
              <div data-aos="fade-right" data-aos-delay="700">
                <h3 className="font-semibold text-[23px] uppercase text-gray-800 mb-2 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
                  {aboutData.infoTitle}
                </h3>
                <p className="text-gray-600 mt-10">
                  {aboutData.infoDescription}
                </p>
              </div>
              {/* Right Progress Section */}
              <div>
                {aboutData.services.map((service, index) => (
                  <div key={index} className="mb-4" data-aos="fade-left" data-aos-delay={(250 * (index + 1)) + 700}>
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-medium text-[23px]">
                        {service.title}
                      </span>
                      <span className="text-gray-800">{service.servicePersantage}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                      <div
                        className="bg-[#43426A] h-2 rounded-full"
                        style={{ width: service.servicePersantage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <Partners />
      </div>
    </div>
  );
}

export default About;
