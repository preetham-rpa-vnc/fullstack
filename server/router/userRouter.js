const { response } = require("express");
const userHelper = require("../config/userHelper");
const router = require("express").Router();

router.post("/adduser", (req, res) => {
  userHelper.addUser(req.body).then((response) => {
    console.log("rsponse", response);
    return res.status(200).json(response);
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  userHelper.loginUser(req.body).then(response => {
    return res.json(response)
    // console.log(res);
  })
});

module.exports = router;
