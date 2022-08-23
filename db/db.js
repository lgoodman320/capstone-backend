// get Sequelize from npm packages
const Sequelize = require("sequelize");

// initialize options to an empty object
let options = {};

// set the databaseURL to the process.env.DATABASE_URL
// to work with heroku's database
let databaseURL = process.env.DATABASE_URL;

const fs = require("fs");

//

// if running database on localhost
if (!databaseURL) {
    // set databaseURL to the localhost database URL
    databaseURL = "postgres://larrygoodman@localhost:5432/capstone";
    // set options for database running on localhost
    options = {
        // set logging to false
        logging: false,
    };
} else {
    // set options for database running on heroku
    options.dialectOptions = {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    };
}
// initialize an instance of Sequelize to connect to the database
// passing the URI options as arguments
const db = new Sequelize(databaseURL, options);

// import Item model
const Item = require("./Item")(db);

// array of filenames to read item data from
const storeArray = [
    "/wegmans-dewitt-items.json",
    "/wegmans-fairmount-items.json",
    "/wegmans-great-northern-items.json",
    "/wegmans-james-st-items.json",
    "/wegmans-john-glenn-items.json",
    "/wegmans-onondaga-items.json",
    "/wegmans-taft-road-items.json",
];


/**
 * Function for loading item data into database
 */
// const loadItemData = async () => {
//     for (const store of storeArray) {
//         let rawData = fs.readFileSync(__dirname + store, "utf8");
//         const json = JSON.parse(rawData);

//         let toCreate = [];
//         let items = 0;
//         for (const item of json) {
//             if (item.aisle) {
//                 items++;
//                 toCreate.push({
//                     aisle: item.aisle,
//                     base_price: item.base_price,
//                     brand_name: item.brand_name,
//                     categorie_id: item?.categorie?.id,
//                     categorie_name: item?.categorie?.name,
//                     fulfillment_store_number: item.fulfillment_store_number,
//                     name: item.name,
//                     usa_snap_eligible: item.usa_snap_eligible,
//                 });

//                 if (items % 100 === 0) {
//                     console.log(store, items);
//                 }
//             }
//         }
//         console.log("starting insert");
//         Item.bulkCreate(toCreate);
//         console.log("insert done");
//         items = 0;
//     }
// };

// loadItemData();
// for all the files in the

// TODO: Seed database with stores

// TODO: Seed database with items

// TODO: Create function to load stores into database

// TODO: Create functin to load items into database

// Function for testing the connection to the database
const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected Successfully!");
        db.sync(); //create tables based off our models if they don't exist
    } catch (error) {
        console.error(error);
        console.error("PANIC! DB PROBLEMS");
    }
};

connectToDB();

module.exports = { db, Item }; // export out the db model so we can use it elsewhere in out code
