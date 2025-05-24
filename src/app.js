const express = require("express")
const app = express()
const cors = require("cors")
const errorHandler = require("./middlewares/errorHandler")
//imports
const router = require("./routes")
//imports
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get("/", (req, res) => {
  res.send("Server is working ✅");
});
//Routes
app.use("/api/auth", router.authRouter)
app.use("/api/header", router.HeaderRouter)
app.use("/api/about", router.aboutRouter)
app.use("/api/weDo", router.WeDoRouter)
app.use("/api/product", router.productRoutes)
app.use("/api/article", router.articleRouter)
app.use("/api/objective", router.objectiveRouter)
app.use("/api/menagement", router.menagementRouter)
app.use("/api/contact", router.contactRouetr)
app.use("/api/message", router.MessageRouter)
app.use("/api/checkout", router.CheckRouter)
//error
app.use(errorHandler)
module.exports = app