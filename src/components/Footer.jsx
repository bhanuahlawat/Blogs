
import React from "react";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      
      {/* Top Section: Main content columns */}
      {/* 🎯 KEY CHANGE 1: Introduced sm:grid-cols-2 for a tablet layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
        
        {/* Logo & Copyright (Column 1) */}
        {/* On mobile, this takes 1 column. On tablet (sm), it spans 2 columns for the long text. On desktop (md), it reverts to 1 column. */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h1 className="text-xl font-bold mb-2 text-green-700">BLOGS</h1>
          <p className="text-sm text-gray-500 mt-4"> 
            © 2025 BLOGS Financial Services Private Limited <br />
            (formerly known as “BLOGS Advisory Services <br className="hidden sm:inline" /> Private Limited”)
          </p>
        </div>

        {/* Tracking Tools (Column 2) - Standard 1-column layout on sm/md/lg */}
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">TRACKING TOOLS</h3>
          <ul className="space-y-1 text-gray-500 text-sm">
            <li className="hover:text-gray-800 cursor-pointer">Timeline</li>
            <li className="hover:text-gray-800 cursor-pointer">Portfolio</li>
            <li className="hover:text-gray-800 cursor-pointer">Watchlist</li>
            <li className="hover:text-gray-800 cursor-pointer">Alerts</li>
            <li className="hover:text-gray-800 cursor-pointer">Results</li>
          </ul>
        </div>

        {/* Research Tools (Column 3) - Standard 1-column layout on sm/md/lg */}
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">RESEARCH TOOLS</h3>
          <ul className="space-y-1 text-gray-500 text-sm">
            <li className="hover:text-gray-800 cursor-pointer">Ideas Dashboard</li>
            <li className="hover:text-gray-800 cursor-pointer">Company Search</li>
            <li className="hover:text-gray-800 cursor-pointer">Sector Search</li>
            <li className="hover:text-gray-800 cursor-pointer">Stock Screener</li>
            <li className="hover:text-gray-800 cursor-pointer">Market Monitor</li>
            <li className="hover:text-gray-800 cursor-pointer">Macro Indicators</li>
            <li className="hover:text-gray-800 cursor-pointer">Raw Materials</li>
          </ul>
        </div>

        {/* Policies & About (Column 4) - Stacks neatly within the grid container */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold mb-2 text-gray-700">POLICIES</h3>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li className="hover:text-gray-800 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-gray-800 cursor-pointer">Terms of Use</li>
              <li className="hover:text-gray-800 cursor-pointer">Cancellation Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 text-gray-700">ABOUT</h3>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li className="hover:text-gray-800 cursor-pointer">Features</li>
              <li className="hover:text-gray-800 cursor-pointer">What's New</li>
              <li className="hover:text-gray-800 cursor-pointer">Pricing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar (Copyright and Social Icons) */}
      <div className="border-t py-3 max-w-7xl mx-auto px-4 sm:px-6"> 
        {/* 🎯 KEY CHANGE 2: Use flex-col on mobile, flex-row on sm+ to prevent overflow */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-xs text-gray-400 order-2 sm:order-1 text-center sm:text-left">
            © 2025 BLOGS Financial Services Private Limited | All rights reserved
          </p>
          <div className="flex items-center space-x-3 order-1 sm:order-2">
            <span className="text-xs text-gray-400 font-semibold">CONNECT WITH US</span>
            <a href="https://instagram.com/blogs" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 text-gray-500 hover:text-gray-800 cursor-pointer" />
            </a>
            <a href="https://twitter.com/blogs" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 text-gray-500 hover:text-gray-800 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;