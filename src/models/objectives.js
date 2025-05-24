const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")

const Objective = sequelize.define("objective",{
    image:{
        type:DataTypes.TEXT
    },
    title :{
        type:DataTypes.STRING
    },
    parag : {
        type:DataTypes.STRING
    }
},{
    paranoid:true
})

module.exports = {
    Objective
};
