const mongoose = require("mongoose");
require("dotenv").config();
const Blog = require("./model/Blog");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const sampleBlogs = [
  {
    title: "Getting Started with React and Tailwind CSS",
    excerpt: "Learn how to set up a modern React application with Tailwind CSS for rapid UI development.",
    content: "React and Tailwind CSS are a powerful combination for building modern web applications. In this comprehensive guide, we'll walk through setting up a new React project with Vite, installing Tailwind CSS, and creating your first components. We'll cover best practices, common patterns, and tips for optimizing your development workflow. By the end of this tutorial, you'll have a solid foundation for building beautiful, responsive user interfaces.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    tags: ["React", "Tailwind CSS", "Frontend", "Tutorial"],
    published: true,
  },
  {
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "A comprehensive guide to creating scalable and secure REST APIs using Node.js and Express framework.",
    content: "Building robust RESTful APIs is essential for modern web development. This guide covers everything from setting up your Node.js environment to implementing authentication, error handling, and best practices for API design. We'll explore middleware, routing, database integration with MongoDB, and how to structure your code for maintainability. You'll learn how to create endpoints, handle requests and responses, and implement proper error handling.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    category: "Backend",
    tags: ["Node.js", "Express", "REST API", "Backend"],
    published: true,
  },
  {
    title: "MongoDB Best Practices for Production",
    excerpt: "Essential tips and tricks for optimizing MongoDB performance in production environments.",
    content: "MongoDB is a powerful NoSQL database, but it requires careful configuration and optimization for production use. This article covers indexing strategies, schema design patterns, query optimization, and monitoring techniques. We'll discuss replication, sharding, backup strategies, and security best practices. Learn how to avoid common pitfalls and ensure your MongoDB deployment is fast, reliable, and secure.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    category: "Database",
    tags: ["MongoDB", "Database", "Performance", "Best Practices"],
    published: true,
  },
  {
    title: "Modern JavaScript ES6+ Features",
    excerpt: "Explore the latest JavaScript features that will make your code cleaner and more efficient.",
    content: "JavaScript has evolved significantly with ES6 and beyond. This comprehensive guide explores arrow functions, destructuring, spread operators, async/await, modules, and more. We'll look at practical examples and use cases for each feature, helping you write more concise and maintainable code. Understanding these modern features is essential for any JavaScript developer working with contemporary frameworks and libraries.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    category: "JavaScript",
    tags: ["JavaScript", "ES6", "Modern JS", "Programming"],
    published: true,
  },
  {
    title: "Deploying Full Stack Apps to Cloud",
    excerpt: "Step-by-step guide to deploying your MERN stack applications to cloud platforms like Vercel and Heroku.",
    content: "Deploying your application to production can be challenging. This guide walks you through deploying a full-stack MERN application to popular cloud platforms. We'll cover environment variables, database hosting, continuous deployment, domain configuration, and monitoring. Learn how to use Vercel for frontend deployment, Heroku or Railway for backend, and MongoDB Atlas for your database. We'll also discuss best practices for security and performance optimization.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    tags: ["Deployment", "Cloud", "DevOps", "MERN"],
    published: true,
  },
  {
    title: "UI/UX Design Principles for Developers",
    excerpt: "Essential design principles every developer should know to create better user experiences.",
    content: "Good design is crucial for user satisfaction and product success. This article covers fundamental UI/UX principles including color theory, typography, spacing, visual hierarchy, and accessibility. We'll explore how to create intuitive interfaces, design responsive layouts, and implement user-centered design practices. Even if you're primarily a developer, understanding these principles will help you build better products and communicate more effectively with designers.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
    category: "Design",
    tags: ["UI/UX", "Design", "User Experience", "Frontend"],
    published: true,
  },
];

const seedBlogs = async () => {
  try {
    // Clear existing blogs
    await Blog.deleteMany({});
    console.log("🗑️  Cleared existing blogs");

    // Insert sample blogs
    await Blog.insertMany(sampleBlogs);
    console.log("✅ Sample blogs inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding blogs:", error);
    process.exit(1);
  }
};

seedBlogs();
