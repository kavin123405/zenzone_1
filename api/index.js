const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const chatRoute = require("./routes/chat");
const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// routes
app.use("/api/chat", chatRoute);
app.use("/api/auth", authRoute);

// home route
app.get("/", (req, res) => {
  res.send("ZenZone Backend Running");
});

module.exports = app;
