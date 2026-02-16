import HeroSection from "./HeroSection";
import { motion } from "framer-motion";


const services = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    title: "Frontend Development",
    description:
      "Designing and developing responsive user interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS to create modern and interactive web applications.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    title: "Backend Development",
    description:
      "Building secure and scalable server-side applications using Node.js, Express.js, Java, and Spring Boot to handle business logic, APIs, and authentication.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    title: "Database Management",
    description:
      "Designing and managing databases like MongoDB and MySQL to store, retrieve, and organize application data efficiently with optimized queries.",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQHe5RBOds0-iQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702136235215?e=2147483647&v=beta&t=8JeW9kg944D9SbIdmd0OhhHGjVfdHr7WWyuJzJPvE2w",
    title: "Full Stack Web Development",
    description:
      "Developing complete full stack web applications by integrating frontend and backend technologies to deliver functional, user-friendly solutions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Project Development",
    description:
      "Working on real-world MERN and Java-based projects to improve problem-solving skills, coding practices, and software development experience.",
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
