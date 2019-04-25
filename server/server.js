const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//mongoose setting
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//db config
const db = require("./config/mongo").mongoURI;

//db connection
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//routing
const register = require("./routes/register");
app.use("/user", register);

const login = require("./routes/login");
app.use("/user", login);

const profile = require("./routes/profile");
app.use("/user", profile);

const orders = require("./routes/orders");
app.use("/user", orders);

const product = require("./routes/product");
app.use("/user", product);



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
