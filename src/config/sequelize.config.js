const { Sequelize } = require("sequelize");

require("dotenv").config()

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Render uchun kerak
    }
  },
  logging:false
});

module.exports = sequelize;