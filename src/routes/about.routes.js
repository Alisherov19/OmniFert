const router = require("express").Router();
const controller = require("../controllers/about.controller");
const authMDL = require("../middlewares/auth.mdl");
const validate = require("../middlewares/validate.mdl");
const { aboutSchema } = require("../validations/about.validate");

router.post("/", authMDL.verifyToken, authMDL.isAdmin, validate(aboutSchema), controller.create);
router.put("/:id", authMDL.verifyToken, authMDL.isAdmin, validate(aboutSchema), controller.update);
router.delete("/:id", authMDL.verifyToken, authMDL.isAdmin, controller.destroy);
router.put("/restore/:id", authMDL.verifyToken, authMDL.isAdmin, controller.restore);


router.get("/", controller.read);
router.get("/all", authMDL.verifyToken, authMDL.isAdmin, controller.readAll);
router.get("/:id", controller.readOne);

module.exports = router;
