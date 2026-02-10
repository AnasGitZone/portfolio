import React from "react";
import { FaEnvelope, FaBirthdayCake, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen px-4 sm:px-6 lg:px-10 mt-20 sm:mt-24 lg:mt-28 mb-5">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] border border-yellow-400/20 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 text-center flex flex-col items-center relative overflow-hidden mx-auto md:mx-0"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400/10 rounded-full -translate-y-10 sm:-translate-y-16 translate-x-10 sm:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/5 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
        
        {/* Profile Image */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex items-center justify-center mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6"
        >
          <img
            src="/Dipak.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name & Role */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-3xl lg:text-4xl font-medium italic mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          style={{ fontFamily: '"Poppins", "Segoe UI", sans-serif' }}
        >
          Dipak Kumar Sah
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg"
        >
          Soc Analyst /  malware analyst / cloud computing
        </motion.div>

        {/* Info Cards */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full mb-6 sm:mb-8">
          {[
            { icon: FaEnvelope, label: "EMAIL", value: "dk7637466@gmail.com" },
            { icon: FaBirthdayCake, label: "BIRTHDAY", value: "june 25, 2004" },
            { icon: FaMapMarkerAlt, label: "LOCATION", value: "Gopalganj, Bihar, India" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(250, 204, 21, 0.1)" }}
              className="flex items-center bg-[#111]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300"
            >
              <item.icon className="text-yellow-400 text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4 flex-shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                <p className="text-xs sm:text-sm font-medium text-white truncate">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-3 sm:gap-4 w-full"
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/dipak-kumar-779bb3298/", color: "hover:text-blue-400" },
            { icon: FaGithub, href: "https://github.com/dipakhackme", color: "hover:text-gray-300" },
            { icon: FaDownload, href: "/Dipak Resume.pdf", color: "hover:text-green-400" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 sm:w-12 sm:h-12 bg-[#111]/70 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-yellow-400 ${social.color} transition-all duration-300 border border-gray-700/50 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20`}
            >
              <social.icon className="text-base sm:text-xl" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="hidden md:block flex-1 p-6"></div>
    </div>
  );
}
