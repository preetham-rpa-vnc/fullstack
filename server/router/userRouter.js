const { response } = require("express");
const userHelper = require("../helper/userHelper");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { serviceID, accountSID, authToken } = require("../config/otp_auth");
const { route } = require("./adminRouter");
const client = require("twilio")(accountSID, authToken);

router.get("/getallitems", (req, res) => {
  userHelper.getAllItems().then((allItems) => {
    return res.json(allItems);
  });
});

router.get("/getitem", (req, res) => {
  const id = req.query;
  userHelper
    .getItem(id.id)
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

// router.get("/getallcrops", (req, res) => {
//   userHelper.getAllCrop().then((allCrop) => {
//     res.json(allCrop);
//   });
// });

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
    const { status, exuser } = response;
    const { name, email, mobile } = exuser;
    if (status) {
      client.verify
        .services(serviceID)
        .verifications.create({
          to: `+91${mobile}`,
          // to: contact_number,
          channel: "sms",
        })
        .then((verification) => {
          console.log("verification", verification);
          console.log(`Sent verification: '${verification.sid}'`);
          // res.status(200).json({ verification, status: "open", user: resp });
          return res.status(200).json(response);
        });
    }
    return res.status(200).json(response);
  });
});

router.post("/login", (req, res) => {
  console.log("##########", req.body);
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
  // const number = "+918606419976";
  const { number } = req.body;
  userHelper.checkNuber(number).then((resp) => {
    console.log("response", resp);
    res.status(200).json({ status: "open", user: resp });
    if (resp) {
      client.verify
        .services(serviceID)
        .verifications.create({
          to: `+91${number}`,
          // to: contact_number,
          channel: "sms",
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
  const { otp, mobile } = req.body;

  client.verify
    .services(serviceID)
    .verificationChecks.create({
      to: `+91${mobile}`,
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

router.get("/getallproducts", (req, res) => {
  // console.log("req.body", req.body);
  userHelper.getAllProduct().then((allData) => {
    return res.json(allData);
  });
});

router.get("/getsearchkeys", (req, res) => {
  userHelper.getAllManufactures().then((result) => {
    return res.json(result);
  });
});

router.get("/findsearchdata", (req, res) => {
  // console.log("req body", req.body);
  console.log("req query", req.query);
  userHelper.searchProduct(req.query).then(({ data, err }) => {
    // console.log("data@@@@@@@@@@@@@@@@@@@@@", JSON.stringify(data));
    console.log("err", err);
    if (err) {
      res.json(err);
    }
    if (data) {
      res.status(200).json(data.rows[0].json_build_object.products);
    }
  });
});

router.post("/checklocation", (req, res) => {
  // console.log("req body", req.body);
  userHelper.checkLocation(req.body).then((userResp) => {
    res.json(userResp);
  });
});

router.post("/loginuserdata", (req, res) => {
  // res.setHeader(req.useragent)
  // res.send(req.useragent);
  const { os, browser, platform } = req.useragent;
  // res.json(req.useragent);
  console.log(os, browser, platform);
  // console.log("req.body", req.body);
  userHelper.userLoginDetails(req.body, req.useragent).then((result) => {
    res.json({ message: "success" });
  });
});

router.get("/getuserlocation", (req, res) => {
  const user = req.query;
  console.log("user ##### user", user);
  userHelper.checkLocation(user).then((location) => {
    console.log();
    res.json(location);
  });
});

router.get("/getbrands", (req, res) => {
  userHelper.getAllBrands().then(response => {
    res.json(response)
  })
})

router.get("/getbranditems", (req, res) => {
  const { brand } = req.query
  console.log("req.query", brand);
  userHelper.getBrandItems(brand).then(response => {
    // console.log(response);
    res.json(response)
  })
})

module.exports = router;
