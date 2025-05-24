const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")

const Management = sequelize.define("management",{
    image : {
        type:DataTypes.TEXT
    },
    title :{
        type:DataTypes.STRING
    },
    work :{
        type:DataTypes.STRING
    }
},{
    paranoid:true
})

module.exports = {
    Management
};
