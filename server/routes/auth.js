//Schemas
const User = require("../Modules/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth');


module.exports = (app, con) => {
  //login auth
  app.post("/api/auth", (req, res) => {
    const { login, password } = req.body;

    //validation //  using flassh instead in future//
    if (!login || !password) {
      return res.status(400).json({ msg: "Please enter all filed" });
    }

    sql = "Select * from users";
    con.query(sql, (err, result) => {
      if (err) throw err;
      JSON.stringify(result);

      //Finding user
      const newResult = result.filter(record => record.login === login);

      if (!newResult.length) {
        return res.status(400).json({ msg: "User does not exist" });
      }
      //Validate password
      if (newResult.length) {


        bcrypt.compare(password, newResult[0].password, (err, result) => {
          
          if(!result){
            return res.status(400).json({msg:'password incorect'})
          }
         
          jwt.sign(
            {
              id: newResult[0].id
            },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: newResult[0].id,
                  login: newResult[0].login
                }
              });
            }
          );
          
        });
      } else {
        return res.status(400).json({ msg: "Password incorrect!" });
      }
    });
  });

  app.get('/api/auth/user',auth,(req,res)=>{
    console.log(req.user.id)
    const sql = `Select id,login from users where id=${req.user.id}`
    con.query(sql,(err,result)=>{
      res.json(result)
    })
  })

};
