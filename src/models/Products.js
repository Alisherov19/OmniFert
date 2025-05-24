const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")

const Product = sequelize.define("product",{
    status : {
        type:DataTypes.ENUM("sale", "sold"),
        defaultValue:"sale"
    },
    image:{
        type:DataTypes.TEXT,
        allowNull : false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price :{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
    },
    discount : {
        type:DataTypes.DECIMAL(5,2),
        defaultValue:0.00,
        allowNull:false
    },
    star : {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    category : {
        type:DataTypes.ENUM("popular","recommended"),
    },
     image_1:{
        type:DataTypes.TEXT,
        allowNull : false
    },
     image_2:{
        type:DataTypes.TEXT,
        allowNull : false
    },
     image_3:{
        type:DataTypes.TEXT,
        allowNull : false
    },
     },{
    paranoid:true
})
module.exports = {
    Product
};
