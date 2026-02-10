import React from "react";
import SkillCard from "./SkillCard";
import { FaPython, FaShieldAlt, FaNetworkWired, FaLinux, FaWindows, FaAws, FaCloud, FaTerminal, FaFileAlt } from "react-icons/fa";
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
          title="SIEM & Monitoring"
          skills={[
            { name: "Splunk", level: 85, icon: <FaShieldAlt /> },
            { name: "QRadar", level: 80, icon: <FaShieldAlt /> },
            { name: "Sentinel", level: 80, icon: <FaShieldAlt /> },
            { name: "Wazuh", level: 80, icon: <FaShieldAlt /> },
           
            { name: "Log Analysis", level: 85, icon: <FaShieldAlt /> },
          ]}
        />

        <SkillCard
          title="Threat & Incident Response"
          skills={[
            { name: "Threat Detection", level: 85, icon: <FaShieldAlt /> },
            { name: "MITRE ATT&CK", level: 80, icon: <FaShieldAlt /> },
            { name: "Incident Response", level: 85, icon: <FaShieldAlt /> },
            { name: "Alert Triage", level: 85, icon: <FaShieldAlt /> },
            { name: "Threat Intelligence", level: 80, icon: <FaShieldAlt /> },
            
          ]}
        />

        <SkillCard
          title="Penetration Testing"
          skills={[
            { name: "Burp Suite", level: 80, icon: <FaShieldAlt /> },
            { name: "Metasploit", level: 75, icon: <FaShieldAlt /> },
            { name: "Nmap", level: 85, icon: <FaNetworkWired /> },
            { name: "Wireshark", level: 85, icon: <FaNetworkWired /> },
            { name: "Kali Linux", level: 85, icon: <FaLinux /> },
          ]}
        />

        <SkillCard
          title="Vulnerability Assessment"
          skills={[
            { name: "Nessus", level: 80, icon: <FaShieldAlt /> },
            { name: "OpenVAS", level: 75, icon: <FaShieldAlt /> },
            { name: "VirusTotal", level: 85, icon: <FaShieldAlt /> },
            { name: "MISP", level: 75, icon: <FaShieldAlt /> },
          ]}
        />

        <SkillCard
          title="Malware & Forensics"
          skills={[
            { name: "Malware Analysis", level: 80, icon: <FaShieldAlt /> },
            { name: "IDA Pro", level: 70, icon: <FaShieldAlt /> },
            { name: "Security Operations", level: 75, icon: <FaShieldAlt /> },
            { name: "Digital Forensics", level: 75, icon: <FaShieldAlt /> },
          ]}
        />

        <SkillCard
          title="Endpoint & EDR/XDR"
          skills={[
            { name: "CrowdStrike", level: 80, icon: <FaShieldAlt /> },
            { name: "Microsoft Defender", level: 85, icon: <FaWindows /> },
            { name: "Endpoint Security", level: 85, icon: <FaShieldAlt /> },
          ]}
        />

        <SkillCard
          title="Networking & Protocols"
          skills={[
            { name: "TCP/IP, DNS, HTTP", level: 85, icon: <FaNetworkWired /> },
            { name: "TLS/SSL", level: 80, icon: <FaNetworkWired /> },
            { name: "Palo Alto Firewall", level: 75, icon: <FaShieldAlt /> },
            { name: "Fortinet", level: 75, icon: <FaShieldAlt /> },
          ]}
        />

        <SkillCard
          title="Systems & Cloud Security"
          skills={[
            { name: "Windows Security", level: 85, icon: <FaWindows /> },
            { name: "Linux Security", level: 80, icon: <FaLinux /> },
            { name: "AWS Security", level: 75, icon: <FaAws /> },
            { name: "Azure Security", level: 75, icon: <FaCloud /> },
          ]}
        />

        <SkillCard
          title="Scripting & Automation"
          skills={[
            { name: "Python Scripting", level: 85, icon: <FaPython /> },
            { name: "PowerShell", level: 80, icon: <FaTerminal /> },
            { name: "Security Monitoring", level: 85, icon: <FaShieldAlt /> },
             { name: "Bash Scripting", level: 85, icon: <FaShieldAlt /> },
          ]}
        />

        <SkillCard
          title="Documentation & Ticketing"
          skills={[
           
            { name: "Reporting", level: 85, icon: <FaFileAlt /> },
            { name: "Documentation", level: 90, icon: <FaFileAlt /> },
            { name: "Communication", level: 85, icon: <FaFileAlt /> },
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
