const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");
const { verifyToken, isAdmin } = require("../middlewares/auth.mdl");
const validate = require("../middlewares/validate.mdl");
const { productScheme } = require("../validations/product.validate");


router.post("/", verifyToken, isAdmin, validate(productScheme), controller.create);
router.put("/:id", verifyToken, isAdmin, validate(productScheme), controller.update);
router.delete("/:id", verifyToken, isAdmin, controller.destroy);
router.put("/restore/:id", verifyToken, isAdmin, controller.restore);


router.get("/category", controller.readCategories);
router.get("/", controller.read);
router.get("/all", controller.readAll);
 // ?category=popular
router.get("/:id", controller.readOne);

module.exports = router;
