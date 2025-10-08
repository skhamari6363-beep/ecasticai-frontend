import React from "react";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import WebIcon from "../assets/WebLogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#06182E] text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-6 gap-6">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <img
              src={WebIcon}
              alt="Ecastic AI"
              className="w-9 h-9 p-1 rounded-lg"
            />
            <span className="text-lg font-semibold">Ecastic AI</span>
          </div>
          <span className="hidden sm:block mx-2 text-gray-500">|</span>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ecastic AI. All rights reserved
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Get in Touch
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex justify-center gap-3">
          <a href="#">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-7 h-7 bg-white p-1 rounded-lg"
            />
          </a>
          <a href="#">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-7 h-7 bg-white p-1 rounded-lg"
            />
          </a>
          <a href="#">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-7 h-7 bg-white p-1 rounded-lg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
