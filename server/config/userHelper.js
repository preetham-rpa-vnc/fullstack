const db = require("../config/dbConnection");
const bcrypt = require("bcrypt");
const collection = require("../config/collections");

module.exports = {
  addUser: (userData) => {
    console.log("user data", userData);
    const { fname, lname, username, email, password } = userData;
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .findOne({ username })
        .then(async (user) => {
          console.log("user", user);
          if (!user) {
            userData.password = await bcrypt.hash(userData.password, 10);
            db.get()
              .collection(collection.USER_COLLECTION)
              .insertOne(userData)
              .then((resp) => {
                console.log("response", resp.ops[0].username);
                resolve({
                  message: true,
                  exuser: resp.ops[0].username,
                });
              })
              .catch((err) => console.log(err));
          } else {
            resolve({
              message: false,
              exuser: user.username,
            });
          }
        })
        .catch((err) => console.log("new user addind error", err));
    });
  },

  loginUser: (loginUser) => {
    console.log(loginUser);
    const { username, password } = loginUser;
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .findOne({ username })
        .then(async (user) => {
          if (user) {
            bcrypt.compare(password, user.password).then((resp) => {
              if (resp) {
                resolve({ message: "login success", status: true });
              } else {
                resolve({ message: "wrong passwored", status: false });
              }
            });
          } else {
            console.log("user doesn't exist");
            resolve({ message: "user doesn't exist", status: false });
          }
        })
        .catch((err) => console.log(err));
    });
  },
};
