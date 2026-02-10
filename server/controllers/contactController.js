const Message = require("../model/Contact");
const sendEmail = require("../utils/SendEmail");

exports.sendMessage = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // 1️⃣ Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log("Message saved to DB");

    // 2️⃣ Send Email (optional - don't fail if email fails)
    try {
      const emailBody = `
        You have a new message from your portfolio contact form:

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `;

      await sendEmail(process.env.EMAIL_USER, `New Message from ${name}`, emailBody);
      console.log("Email sent successfully");
    } catch (emailError) {
      console.warn("Email failed but continuing:", emailError.message);
    }

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error in sendMessage:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};