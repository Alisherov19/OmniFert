const router = require("express").Router();
const authMDL = require("../middlewares/auth.mdl");
const validate = require("../middlewares/validate.mdl");
const CheckOutCTRL = require("../controllers/check.controller");
const { checkoutScheme } = require("../validations/Check.validate");

// 🔐 Admin routes
router.post("/", authMDL.verifyToken,  validate(checkoutScheme), CheckOutCTRL.create);
router.put("/:id", authMDL.verifyToken, authMDL.isAdmin, validate(checkoutScheme), CheckOutCTRL.update);
router.delete("/:id", authMDL.verifyToken, authMDL.isAdmin, CheckOutCTRL.destroy);
router.put("/restore/:id", authMDL.verifyToken, authMDL.isAdmin, CheckOutCTRL.restore);

// 📦 Public / user routes
router.get("/", CheckOutCTRL.read);           
router.get("/all", CheckOutCTRL.readAll);
router.get("/:id", CheckOutCTRL.readOne);     

module.exports = router;
