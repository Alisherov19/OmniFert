const app = require("./app")
require("dotenv").config()
const connectDB = require("./config/db.config")
const port = process.env.PORT || 5000
require("./utils")
//Models
require("./models/index")
//Database
connectDB()
//Listen
app.listen(port,()=>{
    console.log("Server working on port:", port);
  
})


