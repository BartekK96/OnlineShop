//Order Model
const Order = require("../models/Order");

const express = require("express");
const orders = express.Router();

orders.post("/order", (req, res) => {
    const { login, order } = req.body;
    const newOrder = ({
        login:login,
        order:order
    })
    Order.create(newOrder).then(order=>{
        console.log(`${order} has been added`)
    })
    return res.json({msg:"order has been added"})

  
})
module.exports = orders;
