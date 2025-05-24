const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize.config")

const CheckOut = sequelize.define("check",{
    fullName : {
        type:DataTypes.STRING
    },
    order_name : {
        type:DataTypes.STRING
    },
    company : {
        type:DataTypes.STRING
    },
     country: {
    type: DataTypes.ENUM(
   
      "United States", "United Kingdom", "Canada", "Germany", "France",
      "Italy", "Spain", "Australia", "Brazil", "India",
      "China", "Japan", "South Korea", "Russia", "Mexico",
      "Netherlands", "Switzerland", "Sweden", "Norway", "Denmark",
      "Finland", "Belgium", "Austria", "New Zealand", "Ireland",
      "Turkey", "South Africa", "Argentina", "Poland", "Portugal",
      "Czech Republic", "Hungary", "Greece", "Romania", "Singapore",
      "Malaysia", "Indonesia", "Thailand", "Vietnam", "Philippines",
      "Saudi Arabia", "United Arab Emirates", "Israel", "Ukraine", "Pakistan",
      "Bangladesh", "Nigeria", "Egypt", "Kenya", "Morocco",

      "Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan",

      "Another Country"
    )
  },
    house : {
        type:DataTypes.STRING
    },
    apartment :{
        type:DataTypes.STRING
    },
    city : {
        type : DataTypes.STRING
    },
    phone : {
        type : DataTypes.STRING
    },
    email : {
        type:DataTypes.STRING
    }
},{
    paranoid:true
})

module.exports = {
    CheckOut
};
