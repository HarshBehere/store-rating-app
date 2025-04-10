// middleware/authMiddleware.js
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("🔐 Incoming token:", token);

  if (!token || !token.startsWith("dummy-token-for-")) {
    return res.status(403).json({ message: "Invalid or missing token" });
  }

  const userId = token.split("dummy-token-for-")[1];

  if (!userId) {
    return res.status(401).json({ message: "Token format incorrect" });
  }

  // ✅ Inject role based on dummy userId
  let role = "Normal User";
  if (userId === "7") role = "Store Owner";
  if (userId === "9") role = "System Administrator";

  req.user = {
    id: parseInt(userId),
    role,
  };

  console.log("✅ Authenticated user:", req.user);
  next();
};

module.exports = authenticateToken;
