//Schemas
const Product = require("../Modules/Product");
//middleware
const auth = require("../middleware/auth");

module.exports = (app, con) => {
  app.get("/api", (req, res) => {
    const sql = "Select* from products";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
    });
  });

  app.post("/api", auth,(req, res) => {
    const product = new Product(req.body.name, req.body.price);
    const sql = "INSERT INTO products (name, price) VALUES (?,?)";

    con.query(sql, [product.name, product.price], function(err, result) {
      if (err) throw err;

      res.json(result);
    });
  });
  app.delete("/api/:id", auth,(req, res) => {
    const sql = `DELETE from products where id = ${req.params.id}`;

    con.query(sql, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
};
