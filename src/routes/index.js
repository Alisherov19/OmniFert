const authRouter = require("./auth.routes")
const HeaderRouter = require("./Header.routes")
const aboutRouter = require("./about.routes")
const WeDoRouter = require('./WeDo.routes')
const productRoutes = require("./prduct.router")
const articleRouter = require("./articler.router")
const objectiveRouter = require("./objective.router")
const menagementRouter = require("./management.router")
const contactRouetr = require("./contact.router")
const MessageRouter = require("./message.router")
const CheckRouter = require("./check.router")
module.exports = {
    authRouter,
    HeaderRouter,
    aboutRouter,
    WeDoRouter,
    productRoutes,
    articleRouter,
    objectiveRouter,
    menagementRouter,
    contactRouetr,
    MessageRouter,
    CheckRouter

};
