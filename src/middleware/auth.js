const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied." });
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user data from the token payload to the request
    req.user = decoded.user; // Make sure the payload includes a 'user' object

    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid." });
  }
};

// Middleware to check if the user is an admin
const adminAuth = (req, res, next) => {
  console.log(req.body, "roleee"); // Log the request body to debug if needed

  // Ensure the role is passed in the request body
  if (!req.body || req.body.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  next();
};

module.exports = { auth, adminAuth };
