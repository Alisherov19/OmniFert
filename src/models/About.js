const { DataTypes } = require("sequelize")
const sequelize =require("../config/sequelize.config")

const About = sequelize.define("about",{
        image:{
            type:DataTypes.TEXT,
            allowNull:false
        },
         title:{
            type:DataTypes.STRING,
            allowNull:false
        },
         big_title:{
            type:DataTypes.STRING,
            allowNull:false
        },
         paragraph:{
            type:DataTypes.STRING,
            allowNull:false
        },
         btn:{
            type:DataTypes.STRING,
            allowNull:false
        },
},{
    paranoid:true,
    timestamps:true
})

module.exports = {
    About
};
