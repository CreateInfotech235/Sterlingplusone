import React, { useState, useEffect, useRef } from "react";
import Vectore from "../../assets/image (39).png";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { GetContactPage, sendContactUs } from "../../Api/Webapi/Getcontactsection";
import { Link } from "react-router";


import $ from 'jquery';
import 'jquery.ripples';

import bg from "../../assets/Screenshot_2024-12-18_1655261.png";

function Contact() {
  const heroRef = useRef(null);
  const [contactData, setContactData] = useState({
    title: "",
    subTitle: "",
    button: {
      name: "",
      link: ""
    },
    box: []
  });
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetContactPage();
        if (response) {
          setContactData(response.contactPage);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


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
    console.log(contactData, "bg");

    if (contactData?.bgImage) {
      const imgurl = contactData?.bgImage;
      const img = new Image();
      img.src = imgurl;
      img.onload = () => {
        console.log("123");

        $("#contact").ripples('destroy');
        const showRipple = heroRef.current;
        showRipple.style.backgroundImage = `url(${img.src})`;
        setTimeout(() => {
          rippl('#contact');
        }, 10)
      }
    }
  }, [contactData])

  useEffect(() => {
    rippl('#contact');
  }, [loading])




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendContactUs(formData);
      if (response) {
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="w-full bg-gray-900 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="h-12 bg-gray-700 rounded-lg w-3/4 mx-auto mb-6"></div>
              <div className="h-8 bg-gray-700 rounded-lg w-2/3 mx-auto mb-8"></div>
              <div className="h-12 bg-gray-700 rounded-lg w-48 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Form Section Skeleton */}
        <div className="max-w-screen-xl mx-auto m-0 bg-white sm:rounded-lg flex justify-center flex-col sm:flex-row p-6">
          <div className="lg:w-1/2 xl:w-5/12 space-y-4">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-12 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="h-96 bg-gray-200 rounded-lg m-12"></div>
          </div>
        </div>

        {/* Contact Boxes Skeleton */}
        <div className="max-w-screen-xl mx-auto my-16 px-4">
          <div className="flex flex-wrap justify-center gap-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="w-full sm:w-[416px] md:w-[416px] bg-gray-200 rounded-lg p-10">
                <div className="w-14 h-14 bg-gray-300 rounded-full mx-auto"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>


      <div className={`w-full relative isolate overflow-hidden py-12 sm:py-24 flex justify-center items-center `} ref={heroRef} id="contact" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: window.innerWidth > 768 ? window.innerHeight - 230 : window.innerHeight - 300 }}>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full absolute " style={{ zIndex: '11' }}>
          <div className="text-center">
            <p className="mt-4 text-sm sm:text-base lg:text-xl text-gray-300 font-medium" data-aos="zoom-in-up" data-aos-delay={1100}>
              {contactData?.subTitle}
            </p>
          </div>
        </div>
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-10">
        </div>
      </div>

      <div className="text-gray-900 flex justify-center">
        <div className="max-w-screen-xl mx-auto m-0 bg-white sm:rounded-lg flex justify-center flex-col sm:flex-row">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex-1">
            <div className="mt-8 flex flex-col items-center">
              <div className="w-full flex-1">
                <div className="mb-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-gray-600 small noto text-3xl font-medium bg-white transform" data-aos="fade-right" data-aos-delay="400" >
                    {contactData.title}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    data-aos="fade-right" data-aos-delay="500"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Phone Number"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    data-aos="fade-right" data-aos-delay="600"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    data-aos="fade-right" data-aos-delay="700"
                  />
                  <textarea
                    name="message"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    rows={4}
                    cols={50}
                    placeholder="Enter your query here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    data-aos="fade-right" data-aos-delay="800"
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold  text-white bg-[#F97316] text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cscale5"
                    data-aos="fade-right" data-aos-delay="900"
                  >
                    <span className="ml-2">Submit Now</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center  lg:flex"  >
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" >
              <img src={contactData.image || Vectore} alt="Contact Illustration" data-aos="fade-right" data-aos-delay="300" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-16 px-4">
        <div className="flex flex-wrap justify-center gap-10">
          {contactData.box.map((item, index) => (
            <div key={item._id} className="flex w-full sm:w-[416px] md:w-[416px] flex-col items-center bg-[#43426A] rounded-lg py-10 px-8 sm:px-16 cscale5" data-aos="zoom-in" data-aos-delay={250 * (index + 1)} >
              <h3 className="text-lg font-semibold mt-4 w-14 rounded-full h-14 bg-white flex justify-center items-center">
                <img src={item.icon} alt="icon" className="w-9 h-9" />
              </h3>
              <p className="text-white mt-2 small noto font-bold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
