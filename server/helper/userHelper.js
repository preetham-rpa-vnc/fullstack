const db = require("../config/dbConnection");
const bcrypt = require("bcrypt");
const collection = require("../config/collections");
const ObjectId = require("mongodb").ObjectID;
const pool = require("../config/dbSql");

module.exports = {
  // addUser: (userData) => {
  //   console.log("user data", userData);
  //   const { fname, lname, username, email, password } = userData;
  //   return new Promise((resolve, reject) => {
  //     db.get()
  //       .collection(collection.USER_COLLECTION)
  //       .findOne({ username })
  //       .then(async (user) => {
  //         console.log("user", user);
  //         if (!user) {
  //           userData.password = await bcrypt.hash(userData.password, 10);
  //           db.get()
  //             .collection(collection.USER_COLLECTION)
  //             .insertOne(userData)
  //             .then((resp) => {
  //               console.log("response", resp.ops[0].username);
  //               resolve({
  //                 message: true,
  //                 exuser: resp.ops[0].username,
  //               });
  //             })
  //             .catch((err) => console.log(err));
  //         } else {
  //           resolve({
  //             message: false,
  //             exuser: user.username,
  //           });
  //         }
  //       })
  //       .catch((err) => console.log("new user addind error", err));
  //   });
  // },

  loginUsers: (loginUser) => {
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
                resolve({ user, message: "login success", status: true });
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

  getAllItems: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.PRODUCT_COLLECTION)
        .aggregate([
          {
            $unwind: "$crops",
          },
        ])
        .toArray()
        .then((itemsAll) => {
          resolve(itemsAll);
        });
    });
  },

  getItems: (id) => {
    console.log("iiiiiiiiiiiiiid", id);
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.PRODUCT_COLLECTION)
        .findOne({ _id: ObjectId(id) })
        .then((item) => {
          resolve(item);
        })
        .catch((err) => console.log(err));
    });
  },

  getSimilerItems: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.PRODUCT_COLLECTION)
        .find({ crop: "All" })
        .toArray()
        .then((items) => {
          resolve(items);
        })
        .catch((err) => console.log(err));
    });
  },

  addAllData: (data) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.CROP_COLLECTION)
        .insert(data)
        .then((res) => {
          resolve(resp);
        });
    });
  },

  getAllCrop: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.CROP_COLLECTION)
        .find()
        .toArray()
        .then((response) => {
          resolve(response);
        });
    });
  },

  getSelectedCrops: (items) => {
    console.log(" all items", items);
    const item = ["All", "Paddy"];
    return new Promise((resolve, reject) => {
      return db
        .get()
        .collection(collection.PRODUCT_COLLECTION)
        .aggregate([
          {
            $unwind: "$crops",
          },
          {
            $match: {
              crops: {
                $in: [items],
              },
            },
          },
        ])
        .toArray()
        .then((resp) => {
          resolve(resp);
        });

      // items.map(async (data, key) => {
      //   console.log("iterate items", data);

      // });
    });
  },

  addUser: (userData) => {
    console.log("user data", userData);
    const {
      first_name,
      last_name,
      user_name,
      user_mobile,
      user_password,
    } = userData;
    const user_type_id = 101;
    const user_status_id = 101;
    return new Promise(async (resolve, reject) => {
      const hashedpassword = await bcrypt.hash(user_password, 10);
      pool.query(
        `SELECT * FROM users WHERE user_name = $1`,
        [user_name],
        (err, result) => {
          if (err) {
            throw err;
          }
          console.log(result.rows);
          if (result.rows.length > 0) {
            resolve({ status: false, exuser: result.rows[0].username });
          } else {
            pool.query(
              `INSERT INTO users (user_name, hashedpassword, user_type_id, user_status_id)
               VALUES ($1, $2, $3, $4) RETURNING user_id`,
              [user_name, hashedpassword, user_type_id, user_status_id],
              (err, result) => {
                if (err) {
                  throw err;
                }
              }
            );

            pool.query(
              `INSERT INTO user_profile (first_name, last_name, user_mobile)
               VALUES ($1, $2, $3) RETURNING *`,
              [first_name, last_name, user_mobile],
              (err, result) => {
                if (err) {
                  throw err;
                }
                console.log(result.rows[0].username);
                resolve({ status: true, exuser: result.rows[0].user_name });
              }
            );
          }
        }
      );
    });
  },

  loginUser: (userData) => {
    console.log("login user data", userData);
    const { user_name, user_password } = userData;
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM users WHERE user_name = $1`,
        [user_name],
        (err, result) => {
          if (err) {
            throw err;
          }
          if (result.rowCount != 0) {
            const user = result.rows[0];
            console.log("user.hashedpassword", user.hashedpassword);
            console.log("user_password", user_password);
            bcrypt
              .compare(user_password, user.hashedpassword)
              .then((status) => {
                console.log("status", status);
                if (status) {
                  resolve({ user, status: true, message: "login succes" });
                } else {
                  resolve({ status: false, message: "wrong password" });
                }
              });
          } else {
            resolve({ status: false, message: "user doesn't exist" });
          }
        }
      );
    });
  },

  checkNuber: (mobileNumber) => {
    console.log("mobileNumber", mobileNumber);
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM user_profile WHERE user_mobile = $1`,
        [mobileNumber],
        (err, result) => {
          if (err) throw err;

          if (result) {
            console.log("result", result.rows[0]);
            resolve(result.rows[0]);
          }
        }
      );
    });
  },

  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select json_build_object('products', (
        select json_agg(json_build_object('product_id', products.product_id, 
        'model', product_model, 'price', product_price,
        'crops', (select json_agg(crop_name)
        from product_crops left join crops c on c.crop_id = product_crops.crop_id
        where product_crops.product_id = products.product_id), 'manuf',
        (select manufacture_name from manufacture where manufacture.manufacture_id = products.manufacture_id),
        'product_name',  pd.product_name, 'pre_build', pd.product_prebuilt, 'usage', pd.product_use, 'description', 
        pd.product_description)) from products
         left join product_detail pd on products.product_id = pd.product_id
        ), 'crops', (select json_agg(json_build_object('crop_id', crop_id, 'crop_name', crop_name))
         from crops), 'manuf', (select json_agg(json_build_object('manuf_id', manufacture_id, 'manuf_name', manufacture_name))
         from manufacture))`,
        (err, result) => {
          console.log("@@@@@@@@@@@@@", err);
          console.log(
            "@@@@@@@@@@@@@result",
            JSON.stringify(result.rows[0].json_build_object.products)
          );
          resolve(result.rows[0].json_build_object.products)
        }
      );
    });
  },
};
