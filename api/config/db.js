const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://dikshachandrakumar:diksha2007@cluster0.rmzzxza.mongodb.net/?appName=Cluster0", {
      serverSelectionTimeoutMS: 5000
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.warn("❌ MongoDB connection failed:", err.message);
    console.warn("⚠️ Falling back to Local Mock JSON Database...");
    global.useLocalDB = true;
  }
};

module.exports = connectDB;
