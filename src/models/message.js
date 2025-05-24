const { DatabaseError, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")
const { email } = require("zod/v4")

const Message = sequelize.define("message",{
    fullName:{
        type:DataTypes.STRING
    },
    email : {
        type:DataTypes.STRING
    },
    subject : {
        type:DataTypes.STRING
    },
    message : {
        type:DataTypes.STRING
    }

},{
    paranoid:true
})

module.exports = {
    Message
};
