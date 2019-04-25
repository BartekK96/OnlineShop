const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const express = require("express");
const login = express.Router();

const config = require("../config/jwt_secret");

//User Model
const User = require("../models/User");

login.post("/login", (req, res) => {
  const { login, password } = req.body;

  //validation
  if (!login || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check if user exist
  User.findOne({ login }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User does not exist!" });
    }

    //validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({ msg: "invalid password" });
      }

      jwt.sign(
        { id: user.id },
        config.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              login: user.login
            }
          });
        }
      );
    });
  });
});

module.exports = login;
