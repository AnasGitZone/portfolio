import HeroSection from "./HeroSection";
import { motion } from "framer-motion";

const services = [
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    title: "SOC Monitoring & Detection",
    description: "Real-time security monitoring, alert triage, log analysis, and threat detection to identify and respond to cyber incidents before they cause damage.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    title: "Phishing Analysis",
    description: "Investigation of suspicious emails, URLs, and attachments to detect phishing campaigns, credential theft, and social engineering attacks.",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    title: "Malware Analysis",
    description: "Static and dynamic analysis of malicious files to understand attacker behavior, infection chains, and mitigation strategies.",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    title: "Threat Hunting",
    description: "Proactive searching through logs, endpoints, and network data to uncover hidden threats and advanced persistent attacks.",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    title: "Incident Response Support",
    description: "Assisting in containment, investigation, root-cause analysis (RCA), and recovery during security incidents.",
  },
  {
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    title: "SIEM & Log Analysis",
    description: "Configuring and analyzing SIEM tools (Splunk/ELK), building dashboards, alerts, and detection rules for better visibility.",
  },
];

export default function Services() {
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
            💼 Services
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 sm:mb-8"></div>
        
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
            I provide comprehensive cybersecurity services focused on SOC operations, threat detection, malware analysis, and incident response to protect organizations from cyber threats.
          </p>
        </motion.div>
        
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="bg-gradient-to-br from-[#111]/70 to-[#1a1a1a]/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-700/50 hover:border-yellow-400/30 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 sm:h-56 lg:h-64 xl:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
