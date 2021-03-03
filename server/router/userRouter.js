const { response } = require("express");
const userHelper = require("../config/userHelper");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/adduser", (req, res) => {
  userHelper.addUser(req.body).then((response) => {
    console.log("rsponse", response);
    return res.status(200).json(response);
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  userHelper.loginUser(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          _id: response.user.id,
        },
        "54524545245ewewe2",
        {
          expiresIn: "7d",
        }
      );
      console.log("token inside", token);
      response = { ...response, token };
      return res.json(response);
    } else {
      return res.json(response);
    }

    // console.log(res);
  });
});

module.exports = router;
