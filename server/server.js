const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

//body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// //Mysql connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "onlineshop"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Routing
const products = require("./routes/products")(app,con);
const users = require("./routes/users")(app,con);
const auth = require("./routes/auth")(app,con);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
