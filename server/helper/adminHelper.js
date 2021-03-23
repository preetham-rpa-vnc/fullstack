const pool = require("../config/dbSql");

module.exports = {
  addProducts: (productDetails) => {
    const {
      EQUIPMENT,
      CROP,
      USAGE,
      DESCRIPTION,
      PHASEOFCROP,
      MANUFACTURER,
      MODEL,
      COST,
      PREBUILT,
      YOUTUBELINK,
      WEBSITELINK,
      SUBSIDYAVAILABLE,
      CUSTOMISABLE,
      IMAGE,
    } = productDetails;

    pool.query(
      `INSERT INTO manufacture (manufacture_name) VALUES ($1) RETURNING manufacture_id`,
      [MANUFACTURER],
      (err, result1) => {
        console.log("manufacture", result1);
        console.log("manufacture error", err);
        pool.query(
          `INSERT INTO products (product_model, manufacture_id, product_price, product_default_language_id ) VALUES ($1, $2, $3, $4) 
           RETURNING product_id`,
          [MODEL, result1.rows[0].manufacture_id, COST, 123],
          (err2, result2) => {
            console.log("products", result2);
            console.log("products error", err2);
            pool.query(
              `INSERT INTO product_detail (product_id, product_name, product_description, phase_of_crop, product_use, product_prebuilt)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING product_id`,
              [
                result2.rows[0].product_id,
                EQUIPMENT,
                DESCRIPTION,
                PHASEOFCROP,
                USAGE,
                PREBUILT
              ],
              (err, response) => {
                console.log("response", response);
                console.log("error", err);
              }
            );
          }
        );
      }
    );
  },
};

// --------+--------------------------+-------+--------
//  public | address                  | table | testpf
//  public | authentication_type      | table | testpf
//  public | categories               | table | testpf
//  public | crops                    | table | testpf
//  public | languages                | table | testpf
//  public | manufacture              | table | testpf
//  public | media_types              | table | testpf
//  public | product_categories       | table | testpf
//  public | product_crops            | table | testpf
//  public | product_listing          | table | testpf
//  public | product_media            | table | testpf
//  public | products                 | table | testpf
//  public | tbl_sequelize_data       | table | testpf
//  public | tbl_sequelize_migrations | table | testpf
//  public | user_address             | table | testpf
//  public | user_profile             | table | testpf
//  public | user_type                | table | testpf
//  public | users                    | table | testpf
// (18 rows)

// INSERT INTO products(product_model, manufacture_id, product_price, product_default_language_id)
// VALUES ('abc', (SELECT manufacture_id FROM manufacture WHERE manufacture_name = 'mahindra'), 100000,
//         (SELECT language_id FROM languages WHERE language_code = 'en'));

//         let productId = db.query(INSERT INTO products(product_model, manufacture_id, product_price, product_default_language_id)
// VALUES ('abc', (SELECT manufacture_id FROM manufacture WHERE manufacture_name = 'mahindra'), 100000,
//         (SELECT language_id FROM languages WHERE language_code = 'en')) RETURNING product_id);

// INSERT INTO product_detail(product_id, product_name, product_description, phase_of_crop, product_use, product_prebuilt,
//                            language_id)
// VALUES (productId,'tractor_11009x','lorel ipsum','harvesting','lorel ipsum','lorel ipsum');
