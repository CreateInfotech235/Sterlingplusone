import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import paypal from '../../assets/image (15).png';
import Skrill from '../../assets/image (16).png';
import bitcoin from '../../assets/image (17).png';
import american_express from '../../assets/image (18).png';
import Visa from '../../assets/image (19).png';

function Footer() {
  return (
    <div className="bg-[#111827] text-white w-full p-8 md:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-600 pb-8">
        {/* Information */}
        <div>
          <h2 className="font-bold text-lg mb-4 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
            INFORMATION
          </h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Delivery Information</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Contact</a></li>
            <li><a href="#" className="hover:underline text-[#9B9B97]">Returns</a></li>
          </ul>
        </div>
        {/* My Account */}
        <div>
          <h2 className="font-bold text-lg mb-4 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
            MY ACCOUNT
          </h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">My Account</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Order History</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Wishlist</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline text-[#9B9B97]">Frequently Questions</a></li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <h2 className="font-bold text-lg mb-4 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
            CATEGORIES
          </h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Wooden Painting</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Canvas Painting</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Mirror</a></li>
            <li className="mb-2"><a href="#" className="hover:underline text-[#9B9B97]">Glass Painting</a></li>
            <li><a href="#" className="hover:underline text-[#9B9B97]">Ceramic Tile Painting</a></li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h2 className="font-bold text-lg mb-4 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-[#F97316] before:bottom-[-5px] before:left-0">
            ABOUT US
          </h2>
          <p className="mb-2 text-[#9B9B97]">
            We are a team of designers and developers that create high-quality Magento, Prestashop, Opencart.
          </p>
          <p className="mb-2 text-[#9B9B97]">Address: 4710-4890 Breckinridge St, Fayettevill</p>
          <p className="text-[#9B9B97]">Email: <a href="mailto:support@plazathemes.com" className="hover:underline text-[#9B9B97]">support@plazathemes.com</a></p>
        </div>
      </div>
      {/* Follow Us and Subscribe */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* Follow Us */}
        <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
          <h2 className="font-bold text-lg mb-4 text-center md:text-left">FOLLOW US</h2>
          <div className="flex gap-4">
            <a href="#" className="text-xl"><FaFacebookSquare style={{ fontSize: '35px' }} /></a>
            <a href="#" className="text-xl"><FaSquareXTwitter style={{ fontSize: '35px' }} /></a>
            <a href="#" className="text-xl"><FaLinkedin style={{ fontSize: '35px' }} /></a>
            <a href="#" className="text-xl"><FaInstagramSquare style={{ fontSize: '35px' }} /></a>
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
        <p className="text-center text-sm mb-4">COPYRIGHT © ROADTHEMES. ALL RIGHTS RESERVED.</p>
        <div className="flex justify-center gap-4">
          <img src={paypal} alt="PayPal" className="w-16 h-auto" />
          <img src={Skrill} alt="Skrill" className="w-16 h-auto" />
          <img src={bitcoin} alt="Bitcoin" className="w-16 h-auto" />
          <img src={american_express} alt="American Express" className="w-16 h-auto" />
          {/* <img src={Visa} alt="Visa" className="w-16 h-auto" /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
