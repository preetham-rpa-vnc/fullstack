const { response } = require("express");
const adminHelper = require("../helper/adminHelper");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/addproduct", (req, res) => {
  console.log("hiii", req.body);
  

  adminHelper.addProducts(req.body)

});

module.exports = router;
