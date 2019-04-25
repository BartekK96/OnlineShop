const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const express = require("express");
const users = express.Router();

const config = require("../config/jwt_secret");

//User Model
const User = require("../models/User");

users.post("/register", (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({
    login: login
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) throw err;
          const newUser = User({
            login: login,
            password: hash
          });

          User.create(newUser).then(user => {
            jwt.sign(
              { id: user.id },
              config.jwtSecret,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token: token,
                  msg: `User ${user.login} register succesfull!`,
                  id: user.id,
                  login: user.login
                });
              }
            );
          });
        });
      } else {
        return res.status(400).json({ msg: "User already exists!" });
      }
    })
    .catch(err => {
      res.send("Error: " + err);
    });
});

module.exports = users;
