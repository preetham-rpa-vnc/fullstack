// const db = require("../config/dbConnection");
const bcrypt = require("bcrypt");
const collection = require("../config/collections");
// const ObjectId = require("mongodb").ObjectID;
const pool = require("../config/dbSql");
const path = require("path");
// const reader = require("xlsx");
const fastcsv = require("fast-csv");
const fs = require("fs");
const { constants } = require("buffer");
const { Stream } = require("stream");

const currDir = path.join("./Masterdata/");
// Function to get the filenames present
// in the directory
const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (error, filenames) => {
      if (error) {
        reject(error);
      } else {
        resolve(filenames);
      }
    });
  });
};
//csvFilter.js
const filtercsvFiles = (filename) => {
  return filename.split(".")[1] === "csv";
};
readdir(currDir).then((filenames) => {
  filenames = filenames.filter(filtercsvFiles);

  for (let i = 0; i < filenames.length; i++) {
    let currFilePath = currDir + filenames[i];

    //Use fast-csv to parse the files
    let csvData = [];
    let csvStream = fastcsv
      .parseFile(currFilePath)
      .on("data", (data) => {
        csvData.push(data);
      })
      .on("end", () => {
        csvData.shift();
        console.log(csvData);
        const query =
          "INSERT INTO cropDetails (Slno, StateName, DistrictName, MarketName,Commodity, Variety,Grade,MinPrice,MaxPrice,ModalPrice,PriceDate)\
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
        //  [Slno, State_Name, DistrictName , MarketName,Commodity, Variety, Grade, MinPrice, MaxPrice, ModalPrice, PriceDate]
        // const query="INSERT INTO cropDetails(col1,col2,col3,col4,col5,col6,col7,col8,col9,col10,col11) values ?";
        pool.connect((err, client, done) => {
          if (err) throw err;

          try {
            csvData.forEach((row) => {
              client.query(query, row, (err, res) => {
                if (err) {
                  console.log(err.stack);
                } else {
                  console.log("inserted " + res.rowCount + " row:", row);
                }
              });
            });
          } finally {
            done();
          }
        });
      });
    Stream.pipeline(csvStream);
  }
});

// const stream = fs.createReadStream("./MasterData/Ajwan_MasterData.csv");
const ws = fs.createWriteStream("./MasterData/Ajwan_MasterData.csv");
// let csvData = [];

// let csvStream = fastcsv
//   .parse()
//   .on("data", function(data) {
//     csvData.push(data);
//   })
//   .on("end", function() {
//     // remove the first line: header
//     csvData.shift();
// const query=
//   "INSERT INTO cropDetails (Slno, State_Name, DistrictName, MarketName,Commodity, Variety,Grade,MinPrice,MaxPrice,ModalPrice,PriceDate)\
//    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
//   // [Slno, State_Name, DistrictName , MarketName,Commodity, Variety, Grade, MinPrice, MaxPrice, ModalPrice, PriceDate]

// pool.connect((err, client, done) => {
//   if (err) throw err;

//   try {
//     csvData.forEach(row => {
//       client.query(query, row, (err, res) => {
//         if (err) {
//           console.log(err.stack);
//         } else {
//           console.log("inserted " + res.rowCount + " row:", row);
//         }
//       });
//     });
//   } finally {
//     done();
//   }
// });
// });

// stream.pipe(csvStream);

pool.connect((err, client, done) => {
  if (err) throw err;

  client.query("SELECT * FROM cropDetails", (err, res) => {
    done();

    if (err) {
      console.log(err.stack);
    } else {
      const jsonData = JSON.parse(JSON.stringify(res.rows));
      console.log("jsonData", jsonData);

      fastcsv
        .write(jsonData, { headers: true })
        .on("finish", function () {
          console.log("Write to bezkoder_postgresql_fastcsv.csv successfully!");
        })
        .pipe(ws);
    }
  });
});

module.exports = {
  // Reading our test file

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

  // loginUsers: (loginUser) => {
  //   console.log(loginUser);
  //   const { username, password } = loginUser;
  //   return new Promise((resolve, reject) => {
  //     db.get()
  //       .collection(collection.USER_COLLECTION)
  //       .findOne({ username })
  //       .then(async (user) => {
  //         if (user) {
  //           bcrypt.compare(password, user.password).then((resp) => {
  //             if (resp) {
  //               resolve({ user, message: "login success", status: true });
  //             } else {
  //               resolve({ message: "wrong passwored", status: false });
  //             }
  //           });
  //         } else {
  //           console.log("user doesn't exist");
  //           resolve({ message: "user doesn't exist", status: false });
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // },

  // getAllItems: () => {
  //   return new Promise((resolve, reject) => {
  //     db.get()
  //       .collection(collection.PRODUCT_COLLECTION)
  //       .aggregate([
  //         {
  //           $unwind: "$crops",
  //         },
  //       ])
  //       .toArray()
  //       .then((itemsAll) => {
  //         resolve(itemsAll);
  //       });
  //   });
  // },

  // getItems: (id) => {
  //   console.log("iiiiiiiiiiiiiid", id);
  //   return new Promise((resolve, reject) => {
  //     db.get()
  //       .collection(collection.PRODUCT_COLLECTION)
  //       .findOne({ _id: ObjectId(id) })
  //       .then((item) => {
  //         resolve(item);
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // },

  // getSimilerItems: () => {
  //   return new Promise((resolve, reject) => {
  //     db.get()
  //       .collection(collection.PRODUCT_COLLECTION)
  //       .find({ crop: "All" })
  //       .toArray()
  //       .then((items) => {
  //         resolve(items);
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // },

  // addAllData: (data) => {
  //   return new Promise((resolve, reject) => {
  //     db.get()
  //       .collection(collection.CROP_COLLECTION)
  //       .insert(data)
  //       .then((res) => {
  //         resolve(resp);
  //       });
  //   });
  // },

  // getAllCrop: () => {
  //   return new Promise((resolve, reject) => {
  //     db.get()
  //       .collection(collection.CROP_COLLECTION)
  //       .find()
  //       .toArray()
  //       .then((response) => {
  //         resolve(response);
  //       });
  //   });
  // },

  // getSelectedCrops: (items) => {
  //   console.log(" all items", items);
  //   const item = ["All", "Paddy"];
  //   return new Promise((resolve, reject) => {
  //     return db
  //       .get()
  //       .collection(collection.PRODUCT_COLLECTION)
  //       .aggregate([
  //         {
  //           $unwind: "$crops",
  //         },
  //         {
  //           $match: {
  //             crops: {
  //               $in: [items],
  //             },
  //           },
  //         },
  //       ])
  //       .toArray()
  //       .then((resp) => {
  //         resolve(resp);
  //       });

  //     // items.map(async (data, key) => {
  //     //   console.log("iterate items", data);

  //     // });
  //   });
  // },

  // addUser: (userData) => {
  //   console.log("user data", userData);
  //   const {
  //     first_name,
  //     last_name,
  //     user_name,
  //     user_mobile,
  //     user_password,
  //   } = userData;
  //   const user_type_id = 101;
  //   const user_status_id = 101;
  //   return new Promise(async (resolve, reject) => {
  //     const hashedpassword = await bcrypt.hash(user_password, 10);
  //     pool.query(
  //       `SELECT * FROM users WHERE user_name = $1`,
  //       [user_name],
  //       (err, result) => {
  //         if (err) {
  //           throw err;
  //         }
  //         console.log(result.rows);
  //         if (result.rows.length > 0) {
  //           resolve({ status: false, exuser: result.rows[0].username });
  //         } else {
  //           pool.query(
  //             `INSERT INTO users (user_name, user_password, user_type_id, user_status_id)
  //              VALUES ($1, $2, $3, $4) RETURNING user_id`,
  //             [user_name, hashedpassword, user_type_id, user_status_id],
  //             (err, result) => {
  //               if (err) {
  //                 throw err;
  //               }
  //             }
  //           );

  //           pool.query(
  //             `INSERT INTO user_profile (first_name, last_name, user_mobile)
  //              VALUES ($1, $2, $3) RETURNING *`,
  //             [first_name, last_name, user_mobile],
  //             (err, result) => {
  //               if (err) {
  //                 throw err;
  //               }
  //               console.log("result.rows[0]", result.rows[0].first_name);
  //               resolve({ status: true, exuser: result.rows[0].first_name });
  //             }
  //           );
  //         }
  //       }
  //     );
  //   });
  // },

  addUser: (userData) => {
    console.log("user data", userData);
    const { name, mobile, email } = userData;
    return new Promise(async (resolve, reject) => {
      pool.query(
        `SELECT * FROM user_profile WHERE name = $1`,
        [name],
        (err, result) => {
          if (err) {
            throw err;
          }
          console.log(result.rows);
          if (result.rows.length > 0) {
            resolve({ status: false, exuser: result.rows[0].username });
          } else {
            pool.query(
              `INSERT INTO user_profile (name, mobile, email)
               VALUES ($1, $2, $3) RETURNING *`,
              [name, mobile, email],
              (err, result) => {
                if (err) {
                  throw err;
                }
                console.log(
                  "result.rows[0]",
                  result.rows[0]
                );
                resolve({
                  status: true,
                  exuser: result.rows[0]
                });
              }
            );
          }
        }
      );
    });
  },

  loginUser: (userData) => {
    console.log("login user data", userData);
    const { name } = userData;
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM users WHERE user_name = $1`,
        [name],
        (err, result) => {
          // console.log("Result", result);
          if (err) {
            throw err;
          }
          if (result.rowCount != 0) {
            resolve({
              user: result.rows[0],
              status: true,
              message: "login succes",
            });
          } else {
            resolve({ status: false, message: "user doesn't exist" });
          }
        }
      );
    });
  },

  // loginUser: (userData) => {
  //   console.log("login user data", userData);
  //   const { user_name, user_password } = userData;
  //   return new Promise((resolve, reject) => {
  //     pool.query(
  //       `SELECT * FROM users WHERE user_name = $1`,
  //       [user_name],
  //       (err, result) => {
  //         if (err) {
  //           throw err;
  //         }
  //         if (result.rowCount != 0) {
  //           console.log("result.rows[0]$$$$$$$$$$$", result.rows[0]);
  //           const user = result.rows[0];
  //           console.log("user.user_password", user.user_password);
  //           console.log("user_password", user_password);
  //           bcrypt.compare(user_password, user.user_password).then((status) => {
  //             console.log("status", status);
  //             if (status) {
  //               pool.query(
  //                 `SELECT * FROM user_profile WHERE user_profile_id = $1`,
  //                 [user.user_id],
  //                 (err, userResult) => {
  //                   console.log("user result", userResult.rows[0]);
  //                   if (err) throw err;
  //                   resolve({
  //                     user: userResult.rows[0],
  //                     status: true,
  //                     message: "login succes",
  //                   });
  //                 }
  //               );
  //             } else {
  //               resolve({ status: false, message: "wrong password" });
  //             }
  //           });
  //         } else {
  //           resolve({ status: false, message: "user doesn't exist" });
  //         }
  //       }
  //     );
  //   });
  // },

  checkNuber: (mobileNumber) => {
    // if (mobileNumber.match(/^-?\d+$/)) {
    //   console.log("It's a whole number!", mobileNumber);
    // } else if (mobileNumber.match(/^-?\d+*\.\d+$/)) {
    //   console.log("It's a decimal number!", mobileNumber);
    // }
    // console.log("mobileNumber", mobileNumber.indexOf(`1`, `2`));
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM user_profile WHERE mobile = $1`,
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

  searchProduct: (searchKeys) => {
    return new Promise((resolve, reject) => {
      console.log("searchkeys", searchKeys);
      const { manufacture, crop } = searchKeys;
      // const manufacture2 = "John Deere";
      // const crop2 = "Wheat";
      // const crop = `'Wheat', 'Paddy'`;
      pool.query(
        `SELECT JSON_BUILD_OBJECT('products', (
          SELECT JSON_AGG(JSON_BUILD_OBJECT(

            'product_id', products.product_id,
            'product_model', products.product_model,
            'product_price', products.product_price,
            'product_crops', (SELECT JSON_AGG(crop_name) FROM product_crops INNER JOIN crops c ON c.crop_id = product_crops.crop_id
                              WHERE product_crops.product_id = products.product_id),
            'product_manufacturer', (SELECT manufacture_name FROM manufacture WHERE manufacture.manufacture_id = products.manufacture_id),
            'product_name', pd.product_name,
            'pre_build', pd.product_prebuilt,
            'product_usage', pd.product_use,
            'product_description', pd.product_description))

          FROM products LEFT JOIN product_detail pd ON products.product_id = pd.product_id
                          INNER JOIN product_crops pc ON products.product_id = pc.product_id 
                            and crop_id in (SELECT crop_id FROM crops WHERE crop_name in ('${crop}'))
                          INNER JOIN manufacture mf ON products.manufacture_id in (SELECT mf.manufacture_id FROM manufacture 
                            WHERE mf.manufacture_name in ('${manufacture}'))
        ))`,
        (err, data) => {
          // console.log("data", JSON.stringify(data.rows[0]));
          resolve({ data, err });
        }
      );
    });
  },

  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select json_build_object('products', (
          
        select json_agg(json_build_object('product_id', products.product_id, 

        'product_model', product_model, 'product_price', product_price,

        'product_crops', (select json_agg(crop_name) from product_crops left join crops c on c.crop_id = product_crops.crop_id

         where product_crops.product_id = products.product_id),

        'product_manufacturer',(select manufacture_name from manufacture where manufacture.manufacture_id = products.manufacture_id),

        'product_name',  pd.product_name, 
        
        'pre_build', pd.product_prebuilt, 
        
        'product_usage', pd.product_use, 
        
        'product_description', pd.product_description)) 
        
        from products left join product_detail pd on products.product_id = pd.product_id), 
        
        'product_crops', (select json_agg(json_build_object('crop_id', crop_id, 'crop_name', crop_name)) from crops),

        'product_manufacturer', (select json_agg(json_build_object('manuf_id', manufacture_id, 'manuf_name', manufacture_name)) from manufacture))`,

        (err, result) => {
          // console.log("@@@@@@@@@@@@@", err);
          // console.log(
          //   "@@@@@@@@@@@@@result",
          //   JSON.stringify(result.rows[0].json_build_object.products)
          // );
          resolve(result.rows[0].json_build_object.products);
        }
      );
    });
  },

  getAllManufactures: () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select json_build_object( 
          'manuf', (select json_agg(json_build_object('manuf_id', manufacture_id, 'manuf_name', manufacture_name)) from manufacture),
          'crops', (select json_agg(json_build_object('crop_id', crop_id, 'crop_name', crop_name)) from crops)
        )
       `,
        (err, data) => {
          resolve(data.rows[0].json_build_object);
        }
      );
    });
  },

  userLoginDetails: (userLocation, userSystem) => {
    console.log("userLocation", userLocation);
    const { os, browser, platform } = userSystem;
    const {
      user_id,
      user_name,
      user_mobile,
      status,
      continent,
      country,
      state,
      district,
      // town,
      postcode,
    } = userLocation;

    return new Promise((resolve, reject) => {
      // pool.query(
      //   `SELECT * FROM login_users WHERE user_name = $1`,
      //   [user_name],
      //   (err, result) => {
      //     if (err) console.log(err);
      //     console.log("r2@@@@@@@@@@@@@@@esult", result.rows[0]);
      //     if (result.rows[0]) {
      //       console.log("user is there buddy");
      //     } else {
      //       console.log("user is there buddy $$$$");
      //     }
      //   }
      // );

      pool.query(
        `INSERT INTO login_users
      (login_user_id, user_name, user_mobile, user_place_country, user_place_state, user_place_district, user_place_postcode, user_browser)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
      `,
        [
          user_id,
          user_name,
          user_mobile,
          country,
          state,
          district,
          postcode,
          browser,
        ],
        (err, result) => {
          // console.log("result@@@@@@@@@@", result);
          // console.log("error@@@@@@@@@@", err);
        }
      );
    });
  },

  checkLocation: (userName) => {
    console.log("user name", userName);
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM login_users WHERE user_name = $1`,
        [userName.first_name],
        (err, result) => {
          if (result) {
            if (result.rowCount > 0) {
              console.log("user location", result.rows[0]);
              if (result.rows[0].user_place_district) {
                console.log(
                  "results location",
                  result.rows[0].user_place_state
                );
                resolve({ district: result.rows[0].user_place_state });
              }
            } else {
              resolve({ country: null });
            }
          } else {
            console.log("results are", result);
            resolve({ country: null });
          }
        }
      );
    });
  },

  // getUserLocation: () => {
  //   return new Promise((resolve, reject) => {

  //   })
  // }
};

// select json_build_object(

//   'products',

//   ( select json_agg(json_build_object(

//   'product_id', products.product_id,

//   'model', product_model, 'price', product_price,

//   'crops', (select json_agg(crop_name) from product_crops left join crops c on c.crop_id = product_crops.crop_id where product_crops.product_id = products.product_id),

//   'manuf',(select manufacture_name from manufacture where manufacture.manufacture_id = products.manufacture_id),

//   'product_name',  pd.product_name,

//   'pre_build', pd.product_prebuilt,

//   'usage', pd.product_use,

//   'description', pd.product_description)) from products

//   left join product_detail pd on products.product_id = pd.product_id),

//   'crops', (select json_agg(json_build_object('crop_id', crop_id, 'crop_name', crop_name)) from crops),

//   'manuf', (select json_agg(json_build_object('manuf_id', manufacture_id, 'manuf_name', manufacture_name)) from manufacture)

//     )
