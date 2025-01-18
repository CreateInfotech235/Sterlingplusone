import React, { useState, useEffect } from "react";
import Xpo from "../../assets/image (26).png";
import Logistics from "../../assets/image (27).png";
import Fusion from "../../assets/image (28).png";
import Envista from "../../assets/image (29).png";
import Ant from "../../assets/image (30).png";
import { GetPartners } from "../../Api/Webapi/GetPartners";
import { Link } from "react-router";

function Partners() {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchPartners = async () => {
      const data = await GetPartners();
      console.log(data);
      setPartners(data);
      setIsLoading(false);
    };
    fetchPartners();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100px] w-full">
        <div className="animate-pulse h-10 w-full bg-gray-200 rounded-full"></div>
      </div>
    );
  }
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left">
          {/* : Our <span className="text-[#904064]">Partners</span> : */}
          : {partners?.title?.split(' ')[0] || ''}
              <span className="text-[#904064] mx-2">
                {partners?.title?.split(' ')[1] || ''}
              </span>
              {partners?.title?.split(' ').slice(2,partners?.title?.split(' ').length).join(' ') || ''}
              :
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
        {partners?.ourPartnerSection?.map((partner, index) => (
          <Link to={partner.link} key={index} className="flex justify-center items-center">
            <img src={partner.img} alt="" />
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
