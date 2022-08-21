// Import Sequelize's builtin data types
const { DataTypes } = require("sequelize");
const { db } = require("./db");

// Create Item model
const Item = (db) => {
    return db.define("item", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        aisle: DataTypes.STRING,
        base_price: DataTypes.DECIMAL,
        categorie_id: DataTypes.INTEGER,
        categorie_name: DataTypes.STRING,
        fulfillment_store_number: DataTypes.INTEGER,
        name: DataTypes.STRING,
        usa_snap_eligible: DataTypes.BOOLEAN,
    });
};