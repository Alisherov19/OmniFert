const sequelize = require("./sequelize.config")

module.exports = (async()=>{
    try{
      await sequelize.authenticate()
      console.log("DB connected successfully");
      await sequelize.sync({force:true})
      //  await sequelize.sync({alter:true})
      console.log("DB synced successfully ");
    }
    catch(err){
        console.log("Internal DB error:", err);
    }
})