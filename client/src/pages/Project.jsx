import { useState } from "react";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    title: "Investigation of Unauthorized Access Using SIEM",
    duration: "1–2 months",
    description: "Investigated over 5,000+ authentication logs to detect unauthorized login attempts. Correlated user activity across 6–8 systems to identify abnormal behavior patterns. Validated security alerts using IP reputation, timestamps, and event frequency, and documented findings to support SOC escalation processes.",
    tech: ["Splunk", "Windows Event Logs", "MITRE ATT&CK", "IP Intelligence", "Log Correlation", "SIEM Rules"],
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    title: "SSH Log Analysis and Threat Detection Using SIEM",
    duration: "1–2 months",
    description: "Monitored and correlated 10,000+ SSH logs to detect high-volume login failures and suspicious SSH access activity. Identified malicious login patterns and mapped attacks to MITRE ATT&CK (T1110 – Brute Force). Triaged high-severity alerts and reduced false positives by 30%, supporting real-time SOC workflows by reviewing 20+ alerts per day.",
    tech: ["Splunk", "Linux Logs", "SSH", "MITRE ATT&CK", "SIEM Alerting", "Log Analysis"],
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    title: "SIEM-Based Threat Detection & Automated Alerting",
    duration: "1–2 months",
    description: "Designed and implemented a mini-SIEM using open-source tools to detect and respond to real-world security threats. Ingested logs from firewalls, endpoints, and IDS/IPS into a centralized SIEM platform for continuous monitoring. Developed custom detection rules using Sigma and YARA to identify brute-force attacks and suspicious PowerShell activity. Built automated alerting workflows to notify the SOC team via Slack/Email and implemented Python-based automation for auto-blocking malicious IPs.",
    tech: ["ELK Stack", "Splunk", "Sigma Rules", "YARA", "Python", "Firewall Logs", "IDS/IPS", "Slack Alerts"],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="text-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-16 min-h-screen flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-18 lg:mt-20">
      <div className="hidden lg:block -mt-28">
        <div className="sticky top-24">
          <HeroSection />
        </div>
      </div>

      <div className="flex-1 w-full bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto border border-yellow-400/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            🚀 Projects
          </h2>
          <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 sm:mb-8"></div>
           
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
            I've worked on tons of little projects over the years, but these are
            the ones that I'm most proud of. Many of them are open-source, so
            check out the code and contribute.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="bg-gradient-to-br from-[#111]/70 to-[#1a1a1a]/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-700/50 hover:border-yellow-400/30 group"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 lg:h-64 xl:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">{project.duration}</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] max-w-xs sm:max-w-lg lg:max-w-2xl w-full rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-yellow-400/30 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover flex-shrink-0"
            />
            <div className="p-4 sm:p-6 overflow-y-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{selectedProject.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{selectedProject.duration}</p>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}