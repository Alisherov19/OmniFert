const router = require("express").Router();
const controller = require("../controllers/WeDo.controller");
const authMDL = require("../middlewares/auth.mdl");
const validate = require("../middlewares/validate.mdl");
const { WeDoSchema } = require("../validations/WeDo.validate");

router.post("/", authMDL.verifyToken, authMDL.isAdmin, validate(WeDoSchema), controller.create);
router.put("/:id", authMDL.verifyToken, authMDL.isAdmin, validate(WeDoSchema), controller.update);
router.delete("/:id", authMDL.verifyToken, authMDL.isAdmin, controller.destroy);
router.put("/restore/:id", authMDL.verifyToken, authMDL.isAdmin, controller.restore);


router.get("/", controller.read);
router.get("/all", authMDL.verifyToken, authMDL.isAdmin, controller.readAll);
router.get("/:id", controller.readOne);

module.exports = router;
