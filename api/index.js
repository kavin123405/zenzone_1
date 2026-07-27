const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const chatRoute = require("./routes/chat");
const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// Middleware to ensure DB connection resolves
let dbConnecting = null;

const dbMiddleware = async (req, res, next) => {
  if (mongoose.connection.readyState === 1 || global.useLocalDB) {
    return next();
  }
  if (!dbConnecting) {
    dbConnecting = connectDB();
  }
  try {
    await dbConnecting;
  } catch (err) {
    // handled by connectDB
  }
  next();
};

app.use(dbMiddleware);

// routes
app.use("/api/chat", chatRoute);
app.use("/api/auth", authRoute);

// home route
app.get("/", (req, res) => {
  res.send("ZenZone Backend Running");
});

module.exports = app;
