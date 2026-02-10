import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-5 w-full border-t border-gray-700">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} Deepak Kumar Sah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
