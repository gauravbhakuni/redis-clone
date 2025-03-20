import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 md:px-16 lg:px-32 border-t border-gray-300">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold">Redis</h2>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaYoutube className="text-xl cursor-pointer" />
            <FaLinkedinIn className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaXTwitter className="text-xl cursor-pointer" />
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="cursor-pointer">Trust</li>
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Terms of use</li>
            <li className="cursor-pointer">Legal notices</li>
            <li className="cursor-pointer">Language ▼</li>
          </ul>
        </div>

        {/* Center Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">USE CASES</h3>
            <ul className="space-y-2">
              <li>Vector database</li>
              <li>Feature stores</li>
              <li>Semantic cache</li>
              <li>Caching</li>
              <li>NoSQL database</li>
              <li>Leaderboards</li>
              <li>Data deduplication</li>
              <li>Messaging</li>
              <li>Authentication token storage</li>
              <li>Fast data ingest</li>
              <li>Query caching</li>
              <li>All solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">INDUSTRIES</h3>
            <ul className="space-y-2">
              <li>Financial Services</li>
              <li>Gaming</li>
              <li>Healthcare</li>
              <li>Retail</li>
              <li>All industries</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul className="space-y-2">
              <li>Mission & values</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">PARTNERS</h3>
            <ul className="space-y-2">
              <li>Amazon Web Services</li>
              <li>Google Cloud</li>
              <li>Azure</li>
              <li>All partners</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
