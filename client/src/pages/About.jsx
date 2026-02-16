import React from "react";
import { FaLaptopCode, FaEye, FaDownload, FaServer, FaDatabase, FaCode, FaProjectDiagram } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import Skills from "./Skills";

const educationHistory = [
  {
    degree: "Bachelor of Technology in CSE ",
    university: "Maharishi Markandeshwar Deemed To Be University, Mullana, Ambala",
    years: "2022 – 2026",
    description: "I am currently pursuing my B.Tech in Computer Science and Engineering.",
  },

  {
    degree: "12th (Science Stream)",
    university: "Shree Gandhi HighSchool Parihar (+2) ",
    years: "2020 – 2022",
    description: "I completed my 12th in Science stream with subjects including Physics, Chemistry, Biology and Mathematics.",
  },
  {
    degree: "10th Grade",
    university: "Shree Gandhi HighSchool Parihar",
    years: "2019 – 2020",
    description: "I completed my 10th grade, where I developed a strong foundation in mathematics, science, and languages.",
  },
];

const services = [
  { icon: FaLaptopCode, title: "Frontend Development", desc: "Designing and developing responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks to create interactive web applications." },
  { icon: FaServer, title: "Backend Development", desc: "Building server-side logic using Java, Spring Boot, and databases to handle business logic, authentication, and data processing." },
  { icon: FaDatabase, title: "Database Management", desc: "Designing and managing databases like MySQL to store, retrieve, and organize application data efficiently." },
  { icon: FaCode, title: "Web Application Development", desc: "Developing complete web applications by integrating frontend and backend technologies to deliver functional and user-friendly solutions." },
  { icon: FaProjectDiagram, title: "Project Development", desc: "Working on real-world projects to improve coding skills, problem-solving ability, and understanding of full stack development." },
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
              I am <span className="text-yellow-400 font-semibold">Md Anas</span>, a final-year Computer Science Engineering student with a strong interest in <span className="text-yellow-400 font-semibold">Full Stack Web Development</span>. I focus on building responsive, user-friendly, and efficient web applications using modern technologies.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
              I have experience working with <span className="text-yellow-400 font-semibold">Java, HTML, CSS, and JavaScript</span>, and I am currently improving my backend development skills using Java and database integration. I have also worked on academic and personal projects such as a <span className="text-yellow-400 font-semibold">Book Management System</span>, which helped me understand real-world application development.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
              I am passionate about learning new technologies and improving my problem-solving skills. My goal is to become a professional Full Stack Developer and build scalable and secure web applications.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg italic">
              ✨ I believe in writing clean code, creating good user experiences, and continuously improving my technical skills.
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
              href="/Anas Resume.pdf"
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
              href="/Anas Resume.pdf"
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
