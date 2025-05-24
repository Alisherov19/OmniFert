const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")

const Article = sequelize.define("article",{
    image :{
        type:DataTypes.TEXT,
        allowNull:false
    },
    title : {
        type:DataTypes.STRING,
    },
    date : {
        type:DataTypes.DATE,
    },
    desc:{
        type:DataTypes.STRING
    }
},{
    paranoid:true
})

module.exports = {
    Article
};
