import React, { useState, useEffect } from 'react';
import paypal from '../../assets/image (15).png';
import Skrill from '../../assets/image (16).png';
import bitcoin from '../../assets/image (17).png';
import american_express from '../../assets/image (18).png';
import { GetFooterSection } from '../../Api/Webapi/GetfooterSection';
import { Link } from 'react-router';

function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetFooterSection();
      setFooterData(data);
    };
    fetchData();
  }, []);

  if (!footerData) return null;

  return (
    <div className="bg-[#111827] text-white w-full p-8 md:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-600 pb-8">
        {footerData?.section?.map((section, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg mb-4 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
              {section?.title}
            </h2>
            <ul>
              {section?.list?.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item?.isbtn ? (
                    <Link to={item?.link} className="hover:underline text-[#9B9B97]">
                      {item?.name}
                    </Link>
                  ) : (
                    <p className=" text-[#9B9B97]">
                      {item?.name}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
 
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* Follow Us */}
        <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
          <h2 className="font-bold text-lg mb-4 text-center md:text-left">FOLLOW US</h2>
          <div className="flex gap-4">
            {footerData?.socialMedia?.map((social, index) => (
              <>
                <Link key={index} to={social?.link} className="text-xl">
                  <img src={social?.icon} alt={social?.name} style={{ width: '30px'}} />
                </Link>
              </>
            ))}
          </div>
        </div>
        {/* Subscribe */}
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="font-bold text-lg mb-4 text-center md:text-left">DON'T MISS OUT ON THE LATEST</h2>
          <form className="flex flex-col sm:flex-row items-center w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 w-full sm:w-auto py-2 px-4 mb-4 sm:mb-0 bg-[#1C2436] border border-gray-600 text-white focus:outline-none focus:ring focus:ring-orange-400"
            />
            <button
              type="submit"
              className="py-2 px-6 bg-[#F97316] text-white font-bold hover:bg-orange-600"
            >
              SUBSCRIBE!
            </button>
          </form>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-600 pt-8">
        <p className="text-center text-sm mb-4">{footerData?.copyright}</p>
        <div className="flex justify-center gap-4">
          <img src={paypal} alt="PayPal" className="w-16 h-auto" />
          <img src={Skrill} alt="Skrill" className="w-16 h-auto" />
          <img src={bitcoin} alt="Bitcoin" className="w-16 h-auto" />
          <img src={american_express} alt="American Express" className="w-16 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
