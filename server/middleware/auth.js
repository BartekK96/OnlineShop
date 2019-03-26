const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("auth");

  //token exist
  if (!token) {
    res.status(401).json({ msg: "no token, failure" });
  }

  try {
    //check if token correct
   
    //if (token) {
      const decoded = jwt.verify(token, config.get("jwtSecret"));
      req.user = decoded;
      next();
    //}
  } catch (e) {
    res.status(400).json({ msg: "invalid token" });
  }
}
module.exports = auth;
