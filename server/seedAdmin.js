const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./model/User");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const createAdminUser = async () => {
  try {
    // Wait for connection
    await mongoose.connection.asPromise();
    
    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (existingAdmin) {
      console.log("⚠️  Admin user already exists");
      console.log("📧 Email:", existingAdmin.email);
      console.log("👤 Role:", existingAdmin.role);
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "admin",
    });

    console.log("✅ Admin user created successfully");
    console.log("📧 Email:", admin.email);
    console.log("👤 Role:", admin.role);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin user:", error.message);
    process.exit(1);
  }
};

setTimeout(() => {
  createAdminUser();
}, 2000);
