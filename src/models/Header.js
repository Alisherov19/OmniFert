const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")

const Header = sequelize.define("header",{
    title : {
        type:DataTypes.STRING,
        allowNull:false    
    },
    paragraph :{
         type:DataTypes.STRING,
        allowNull:false    
    },
    btn : {
        type:DataTypes.STRING,
        allowNull:false
    },
   btn_1 : {
        type:DataTypes.STRING,
        allowNull:false
    },
    img :{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    timestamps:true,
    paranoid:true
})

module.exports = {
    Header
};
