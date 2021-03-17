const { response } = require("express");
const userHelper = require("../helper/userHelper");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { serviceID, accountSID, authToken } = require("../config/otp_auth");
const client = require("twilio")(accountSID, authToken);

router.get("/getallitems", (req, res) => {
  userHelper.getAllItems().then((allItems) => {
    return res.json(allItems);
  });
});

router.get("/getitem", (req, res) => {
  const id = req.query.id;
  userHelper
    .getItems(id)
    .then((item) => {
      return res.json(item);
    })
    .catch((err) => console.log(err));
});

router.get("/getsimileritems", (req, res) => {
  userHelper
    .getSimilerItems()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => console.log(err));
});

router.get("/getallcrops", (req, res) => {
  userHelper.getAllCrop().then((allCrop) => {
    res.json(allCrop);
  });
});

router.get("/getselectedcrops", (req, res) => {
  const items = req.query.selectedCrop;
  userHelper
    .getSelectedCrops(items)
    .then((response) => {
      console.log("###################3", response);
      res.json(response);
    })
    .catch((err) => console.log("check error", err));
});

router.post("/signup", (req, res) => {
  userHelper.addUser(req.body).then((response) => {
    console.log("rsponse", response);
    return res.status(200).json(response);
  });
});

router.post("/login", (req, res) => {
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
      response = { ...response, token };
      return res.json(response);
    } else {
      return res.json(response);
    }
  });
});

router.post("/sendotp", (req, res) => {
  console.log("send otp", req.body);
  const { contact_number } = req.body;
  userHelper.checkNuber(contact_number).then((resp) => {
    console.log("response", resp);
    if (resp) {
      client.verify
        .services(serviceID)
        .verifications.create({
          to: `+91${contact_number}`,
          channel: `sms`,
        })
        .then((verification) => {
          console.log("verification", verification);
          console.log(`Sent verification: '${verification.sid}'`);
          res.status(200).json({ verification, status: "open", user: resp });
        });
    } else {
      console.log("no respone");
      res.json({ message: "Number doesn't exist" });
    }
  });
});

router.post("/verifyotp", (req, res) => {
  console.log("verify otp", req.body);
  const { otp, user_mobile } = req.body;

  client.verify
    .services(serviceID)
    .verificationChecks.create({
      to: `+91${user_mobile}`,
      code: otp,
    })
    .then((check) => {
      console.log(`check`, check);
      if (check.status === "approved") {
        const token = jwt.sign(
          {
            _id: "321456789",
          },
          "54524545245ewewe2",
          {
            expiresIn: "7d",
          }
        );
        res.status(200).json({ status: true, token });
        // res.json(check);
        // callback(null, response);
      } else if (check.status === "pending") {
        res.json({ status: false, error: "wrong otp" });
      }
    });
});

module.exports = router;
