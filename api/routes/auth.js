const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const User = require("../models/User");


// SIGNUP
router.post("/signup", async (req, res) => {

  const { name, email, password, phone, role } = req.body;

  try {

    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hash,
      phone,
      role
    });

    await user.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {

    res.status(500).json({ error: "Signup failed" });

  }

});


// LOGIN
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.json({ message: "Wrong password" });

  res.json({
    message: "Login successful",
    user
  });

});

module.exports = router;
