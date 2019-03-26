//Schemas
const User = require("../Modules/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = (app, con) => {
  app.post("/api/user", (req, res) => {
    const { login, password } = req.body;

    //validation //  using flassh insetead //in future
    if (!login || !password) {
      return res.status(400).json({ msg: "Please enter all filed" });
    }

    //check if user exists
    sql = "Select * from users";
    con.query(sql, (err, result) => {
      if (err) throw err;
      JSON.stringify(result);
      const newResult = result.filter(record => record.login === login);
      if (!newResult.length) {
        const user = new User(login, password);
        const pass = user.password
        //hash hash :D
        bcrypt.hash(user.password, 10, (err, hash) => {
          if (err) throw err;
          
          user.password = hash;
          //insert to db
          const sql = `INSERT INTO users (login,password) values(?,?)`;
          con.query(sql, [user.login, user.password], function(err, result) {
            if (err) throw err;
            user.id = result.insertId;
            jwt.sign(
              {
                id: user.id
              },
              config.get("jwtSecret"),
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
      } else {
        return res.status(400).json({ msg: "Login already exists" });
      }
    });
  });
};
