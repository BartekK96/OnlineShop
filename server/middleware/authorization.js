const config = require("../config/jwt_secret").jwtSecret;
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("token");
    
  // Check for token
  if (!token)
    return res.status(401).json({ msg: "auth failed" });

  try {
    // Verify token
    const decoded = jwt.verify(token, config);
    
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "invalid token" });
  }
}

module.exports = auth;
