const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")
const {v4: uuid4} = require("uuid")
const bcrypt = require("bcryptjs")
const User = sequelize.define("user",{
    username:{
        type:DataTypes.STRING,
       set(value) {
    if (!value) {
      this.setDataValue('username', 'user-' + uuid4().slice(0, 8));
    } else {
      this.setDataValue('username', value);
    }
  }
    },
    email : {
        type:DataTypes.STRING,
        allowNull:false,
    },
    password :{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM("admin","user"),
        defaultValue:"user"
    }
},
{
    hooks:{
        beforeCreate: async (user) =>{
            const hashPassword = await bcrypt.hash(user.password, 10)
            user.password = hashPassword
        },
        beforeUpdate : async(user) => {
            if(user.changed("password")){
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
            }
        }
    }
},
{
 timestamps:true,
 paranoid:true
})

module.exports = {
    User
};
