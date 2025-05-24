const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config");
const { tr } = require("zod/v4/locales");

const Contact =sequelize.define("contact",{
    email:{
        type:DataTypes.STRING
    },
    office : {
        type:DataTypes.STRING
    },
    phone :{
        type:DataTypes.STRING
    },
    map :{
        type :DataTypes.TEXT
    },
    certificates : {
        type:DataTypes.TEXT
    }
},{paranoid:true})

module.exports = {
    Contact
};
