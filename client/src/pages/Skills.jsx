import React from "react";
import SkillCard from "./SkillCard";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaDatabase, FaNodeJs, FaReact, FaBootstrap, FaGitAlt, FaCode, FaTools } from "react-icons/fa";
import { SiMongodb, SiSpringboot, SiExpress, SiPostman, SiIntellijidea, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gradient-to-br from-[#111]/50 to-[#1a1a1a]/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400">🛠️ Skills</h2>
      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 sm:mb-10"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        <SkillCard
          title="Frontend Technologies"
          skills={[
            { name: "HTML", level: 85, icon: <FaHtml5 /> },
            { name: "CSS", level: 85, icon: <FaCss3Alt /> },
            { name: "JavaScript", level: 80, icon: <FaJsSquare /> },
            { name: "React.js", level: 75, icon: <FaReact /> },
            { name: "Bootstrap", level: 80, icon: <FaBootstrap /> },
          ]}
        />

        <SkillCard
          title="Backend Technologies"
          skills={[
            { name: "Java", level: 85, icon: <FaJava /> },
            { name: "Spring Boot", level: 75, icon: <SiSpringboot /> },
            { name: "Node.js", level: 70, icon: <FaNodeJs /> },
            { name: "Express.js", level: 70, icon: <SiExpress /> },
            { name: "RESTful API", level: 80, icon: <FaDatabase /> },
          ]}
        />

        <SkillCard
          title="Database Management"
          skills={[
            { name: "MySQL", level: 85, icon: <SiMysql /> },
            { name: "MongoDB", level: 75, icon: <SiMongodb /> },
            { name: "SQL", level: 85, icon: <FaDatabase /> },
            { name: "JDBC", level: 80, icon: <FaJava /> },
          ]}
        />

        <SkillCard
          title="Tools & IDEs"
          skills={[
            { name: "VS Code", level: 90, icon: <FaCode /> },
            { name: "IntelliJ IDEA", level: 85, icon: <SiIntellijidea /> },
            { name: "Eclipse", level: 80, icon: <FaTools /> },
            { name: "Postman", level: 85, icon: <SiPostman /> },
            { name: "Git & GitHub", level: 80, icon: <FaGitAlt /> },
          ]}
        />

        <SkillCard
          title="Core Concepts"
          skills={[
            { name: "OOP", level: 85, icon: <FaJava /> },
            { name: "DBMS", level: 80, icon: <FaDatabase /> },
            { name: "DSA (Basic)", level: 70, icon: <FaJava /> },
            { name: "MVC Architecture", level: 75, icon: <FaJava /> },
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
