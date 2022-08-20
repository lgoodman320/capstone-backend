// get Sequelize from npm packages
const Sequelize = require("sequelize");

// initialize options to an empty object
let options = {};

// set the databaseURL to the process.env.DATABASE_URL
// to work with heroku's database
let databaseURL = process.env.DATABASE_URL;

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
            rejectUnauthorized: false
        }
    };
}
// initialize an instance of Sequelize to connect to the database
// passing the URI options as arguments
const db = new Sequelize(databaseURL, options);

// TODO: Seed database with stores

// TODO: Seed database with items

// TODO: Create function to load stores into database

// TODO: Create functin to load items into database

// TODO: Function for testing the connection to the database
const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected Successfully!");
        db.sync(); //create tables based off our models if they don't exist
    } catch (error){
        console.error(error);
        console.error("PANIC! DB PROBLEMS");
    }

};

connectToDB();

module.exports = { db }; // export out the db model so we can use it elsewhere in out code