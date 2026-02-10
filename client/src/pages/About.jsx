import React from "react";
import { FaLaptopCode, FaPencilRuler, FaBullhorn, FaPaintBrush, FaEye, FaDownload, FaShieldAlt, FaEnvelope, FaBug, FaSearch, FaExclamationTriangle } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import Skills from "./Skills";

const educationHistory = [
  {
    degree: "Bachelor of Technology in CSE ",
    university: "Maharishi Markandeshwar Deemed To Be University, Mullana, Ambala",
    years: "2022 – 2026",
    description: "I am currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Cloud Technology & information Security, focusing on network security, threat analysis, and secure systems.",
  },

  {
    degree: "12th (Science Stream)",
    university: "Gandhi Inter College",
    years: "2020 – 2022",
    description: "I completed my 12th in Science stream with subjects including Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "10th Grade",
    university: "UHS Balra, Gopalganj",
    years: "2019 – 2020",
    description: "I completed my 10th grade, where I developed a strong foundation in mathematics, science, and languages.",
  },
];

const services = [
  { icon: FaShieldAlt, title: "SOC Analyst", desc: "Monitoring security events, analyzing alerts, detecting threats, and responding to incidents to protect systems from cyber attacks." },
  { icon: FaEnvelope, title: "Phishing Analysis", desc: "Investigating suspicious emails, URLs, and attachments to identify phishing attempts and prevent credential theft." },
  { icon: FaBug, title: "Malware Analysis", desc: "Studying malicious files and behavior to understand how malware works and how to detect and stop it." },
  { icon: FaSearch, title: "Threat Detection", desc: "Using logs, SIEM tools, and threat intelligence to identify and track potential security risks." },
  { icon: FaExclamationTriangle, title: "Incident Response", desc: "Analyzing security breaches, containing threats, and helping restore systems safely." },
];

export default function About() {
  return (
    <section className="text-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-16 min-h-screen flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-18 lg:mt-20">
      <div className="hidden lg:block -mt-28">
        <div className="sticky top-24">
          <HeroSection />
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto border border-yellow-400/20">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            👤 About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 sm:mb-8"></div>
          
          <div className="bg-[#111]/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 mb-8 sm:mb-12">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
              I am <span className="text-yellow-400 font-semibold">Dipak Kumar Sah</span>, a final-year student with a keen interest in <span className="text-yellow-400 font-semibold">Cybersecurity</span>. I am focused on building my skills in <span className="text-yellow-400 font-semibold">SOC and Malware Analysis</span>, with a growing interest in Malware Development.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
              I actively practice on <span className="text-yellow-400 font-semibold">TryHackMe and Hack The Box</span> to gain hands-on experience in real-world security scenarios. I also have foundational knowledge of <span className="text-yellow-400 font-semibold">Cloud Computing</span>, which helps me understand modern security environments.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg italic">
              ✨ I believe that good security practices and seamless functionality go hand in hand to build exceptional user experiences.
            </p>
          </div>
        </motion.div>

        {/* What I'm Doing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400">💼 What I'm Doing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-[#111]/70 to-[#1a1a1a]/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-yellow-400/10 rounded-lg sm:rounded-xl group-hover:bg-yellow-400/20 transition-colors flex-shrink-0">
                    <service.icon className="text-yellow-400 text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors">{service.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-box-gradient backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 mb-8 sm:mb-12"
        >
          <h2 className=" text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400">🎓 Education</h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 sm:mb-8"></div>
          
          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 h-full w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
            {educationHistory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="mb-6 sm:mb-8 pl-12 sm:pl-16 relative"
              >
                <div className="absolute left-3 sm:left-5 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full border-2 sm:border-4 border-[#1e1e1e]"></div>
                <div className="bg-[#1a1a1a]/50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-700/30 hover:border-yellow-400/30 transition-all duration-300">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white">{item.degree}</h3>
                  <h4 className="text-yellow-400 font-medium mt-1 text-xs sm:text-sm lg:text-base">{item.university}</h4>
                  <p className="text-gray-400 flex items-center gap-2 mt-2 text-xs sm:text-sm">
                    <MdCalendarMonth className="text-yellow-400" /> {item.years}
                  </p>
                  <p className="text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-[#111]/50 to-[#1a1a1a]/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400">📄 Resume</h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 sm:mb-8"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.a
              href="/Dipak Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
            >
              <FaEye className="text-xl" />
              View Resume
            </motion.a>
            <motion.a
              href="/Dipak Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg"
            >
              <FaDownload className="text-xl" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
        
        <Skills />
      </div>
    </section>
  );
}
