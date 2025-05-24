const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")

const WeDo = sequelize.define("WE",{
    image :{
        type:DataTypes.STRING,
        allowNull:false
    },
    title :{
        type:DataTypes.STRING,
        allowNull:false
    },
    big_title : {
        type:DataTypes.STRING,
        allowNull:false
    },
    paragraph : {
     type:DataTypes.STRING,
     allowNull:false   
    }
},{
    paranoid:true
})

module.exports = {
    WeDo
};
