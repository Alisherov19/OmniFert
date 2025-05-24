const router = require("express").Router()
const authMDl = require("../middlewares/auth.mdl")
const HederCTRL = require("../controllers/header.controller")
const validate = require("../middlewares/validate.mdl")
const {HeaderScheme} = require("../validations/Heder.validate")

router.post("/", authMDl.verifyToken, authMDl.isAdmin, validate(HeaderScheme), HederCTRL.create)
router.delete("/:id", authMDl.verifyToken, authMDl.isAdmin, HederCTRL.destroy)
router.put("/:id", authMDl.verifyToken, authMDl.isAdmin, validate(HeaderScheme), HederCTRL.update)
router.post("/rest/:id", authMDl.verifyToken, authMDl.isAdmin,  HederCTRL.restore)

//
router.get("/", HederCTRL.read)
router.get("/all", HederCTRL.readAll)
router.get("/:id", authMDl.verifyToken, HederCTRL.readOne)


module.exports = router
