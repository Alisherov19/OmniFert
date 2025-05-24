const router =require("express").Router()
const controller = require("../controllers/managment.controller")
const validate = require("../middlewares/validate.mdl")
const {ManagementScheme} = require("../validations/menagement.validate")
const authMDL = require("../middlewares/auth.mdl")


router.post("/", authMDL.verifyToken, authMDL.isAdmin,validate(ManagementScheme), controller.create)
router.put("/:id", authMDL.verifyToken, authMDL.isAdmin,validate(ManagementScheme), controller.update)
router.delete("/:id", authMDL.verifyToken, authMDL.isAdmin, controller.destroy)
router.put("/rest/:id", authMDL.verifyToken, authMDL.isAdmin, controller.restore)

router.get("/all", controller.readAll)
router.get("/",controller.read)
router.get("/:id", controller.readOne)


module.exports = router