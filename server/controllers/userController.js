const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(" Login attempt for:", email);

    const user = await User.findOne({ where: { email } });
    console.log(" User from DB:", user);

    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(" Password valid:", isPasswordValid);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid password" });

    const token = `dummy-token-for-${user.id}`;

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login server error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
