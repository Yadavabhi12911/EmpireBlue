import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-700 font-[font1]">
        <div className="max-w-7xl mx-auto min-h-[350px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 px-4 sm:px-6 md:px-0 py-8 sm:py-10">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-10 items-center lg:items-start text-center lg:text-left">
            <img src="/logo1.webp" alt="Empire Blue Logo" className="h-[35px] sm:h-[40px] lg:h-[45px] w-auto" />
            <p className="text-xs sm:text-sm leading-relaxed text-gray-700 max-w-xs">
              Providing clean and safe water solutions for a healthier tomorrow.
              Our commitment to quality and innovation makes us the trusted choice in water treatment.
            </p>
            <div className="flex gap-4 sm:gap-5 text-gray-500 text-lg sm:text-xl">
              <Link to="/facebook" aria-label="Facebook" className="hover:text-[#1D22BF]">
                <FaFacebookF />
              </Link>
              <Link to="/twitter" aria-label="Twitter" className="hover:text-[#1D22BF]">
                <FaTwitter />
              </Link>
              <Link to="/instagram" aria-label="Instagram" className="hover:text-[#1D22BF]">
                <FaInstagram />
              </Link>
              <Link to="/linkedin" aria-label="LinkedIn" className="hover:text-[#1D22BF]">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-10 items-center lg:items-start text-center lg:text-left">
            <h3 className="font-semibold text-lg sm:text-xl text-black mb-2 sm:mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-gray-700">
              <li>
                <Link to="/about" className="hover:text-[#1D22BF] text-sm sm:text-base">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#1D22BF] text-sm sm:text-base">Our Services</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#1D22BF] text-sm sm:text-base">Latest News</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-10 items-center lg:items-start text-center lg:text-left">
            <h3 className="font-semibold text-lg sm:text-xl text-black mb-2 sm:mb-4">Our Services</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-gray-700">
              <li>
                <Link to="/services/water-testing" className="hover:text-[#1D22BF] text-sm sm:text-base">Water Testing</Link>
              </li>
              <li>
                <Link to="/services/water-purification" className="hover:text-[#1D22BF] text-sm sm:text-base">Water Purification</Link>
              </li>
              <li>
                <Link to="/services/water-treatment" className="hover:text-[#1D22BF] text-sm sm:text-base">Water Treatment</Link>
              </li>
              <li>
                <Link to="/services/expert-consultation" className="hover:text-[#1D22BF] text-sm sm:text-base">Expert Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3 sm:gap-4 text-gray-600 mt-6 sm:mt-10 items-center lg:items-start text-center lg:text-left">
            <h3 className="font-semibold text-lg sm:text-xl text-black mb-2 sm:mb-4">Contact Us</h3>
            <ul className="space-y-4 sm:space-y-6">
              <li className="text-sm sm:text-base">
                Empire Blue Pvt. Ltd.<br />
                Chhindwara, Madhya Pradesh<br />
                India
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1D22BF] text-sm sm:text-base">+91 886756XXXX</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1D22BF] text-sm sm:text-base">dummy@gamil.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="flex justify-center">
        <div className="border-t border-gray-200 w-[90%] sm:w-[80%]"></div>
      </div>
      <div className="text-gray-500  bg-white text-xs sm:text-sm py-6 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 px-4 sm:px-6 md:px-0 text-center md:text-left">
          <p>© 2025 Empire Blue. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-[#1D22BF] text-xs sm:text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#1D22BF] text-xs sm:text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
