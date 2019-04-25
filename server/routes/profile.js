const auth = require("../middleware/authorization");

const express = require("express");
const profile = express.Router();

//User Model
const User = require("../models/User");

profile.get("/profile", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-passowrd")
    .then(user => res.json(user));
});

module.exports = profile;
