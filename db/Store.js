const { DataTypes } = require("sequelize");

const Store = (db) => {
    return db.define("store", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ext_id: DataTypes.INTEGER,
        store_banner_name: DataTypes.STRING,
        store_banner_ext_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        store_id: DataTypes.INTEGER,
        store_address: DataTypes.STRING,
        store_city: DataTypes.STRING,
        store_province: DataTypes.STRING,
        store_country: DataTypes.STRING,
        store_phone: DataTypes.STRING,
        ebt_enabled_in_state: DataTypes.BOOLEAN,
    });
};

module.exports = Store;