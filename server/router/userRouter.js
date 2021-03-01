const userHelper = require("../config/userHelper");
const router = require("express").Router();

router.post("/adduser", (req, res) => {
  console.log(req.body);
  userHelper.addUser(req.body).then((response) => {
    console.log("rsponse", response);
    return res.status(200).json(response);
  });
});

module.exports = router;
