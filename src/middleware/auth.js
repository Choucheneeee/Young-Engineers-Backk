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

module.exports = { auth };
