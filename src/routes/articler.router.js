const express = require("express");
const router = express.Router();

const controller = require("../controllers/article.controller");
const { verifyToken, isAdmin } = require("../middlewares/auth.mdl");
const validate = require("../middlewares/validate.mdl");
const { articleSchema } = require("../validations/article.validate");

// CREATE, UPDATE, DELETE, RESTORE (Admin only)
router.post("/", verifyToken, isAdmin, validate(articleSchema), controller.createArticle);
router.put("/:id", verifyToken, isAdmin, validate(articleSchema), controller.updateArticle);
router.delete("/:id", verifyToken, isAdmin, controller.deleteArticle);
router.put("/restore/:id", verifyToken, isAdmin, controller.restoreArticle);

// READ
router.get("/byDate", controller.readBYDate)
router.get("/", controller.readAllArticles);
router.get("/all", controller.RealReadAll); // includes soft-deleted
router.get("/:id", controller.readOneArticle);

module.exports = router;
