const pool = require("../config/dbSql");

module.exports = {
  addProduct: (productDetails) => {
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
      `INSER INTO manufacture (manufacture_name) VALUES ($1) RETURNING manufacture_id`,
      [MANUFACTURER],
      (err, result) => {
        pool.query(
          `INSER INTO products (product_model, manufacture_id, product_price, product_default_language_id ) VALUES ($1, $2, $3, $4) 
           RETURNING product_id`,
           [MODEL, result.rows[0].manufacture_id, COST, 123]
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
