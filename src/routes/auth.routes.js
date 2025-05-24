const router = require("express").Router()
const authCTRL = require("../controllers/auth.controller")
const {UserScheme,UserSchemeLogin} = require("../validations/user.validate")
const validation = require("../middlewares/validate.mdl")
const {verifyToken} = require("../middlewares/auth.mdl")

router.post("/register", validation(UserScheme), authCTRL.register)
router.post("/login", validation(UserSchemeLogin), authCTRL.login)
router.post("/logout",verifyToken, authCTRL.logout)

module.exports = router