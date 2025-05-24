const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message.controller");
const { verifyToken, isAdmin } = require("../middlewares/auth.mdl");
const validate = require("../middlewares/validate.mdl");
const { MessageSchema } = require("../validations/message.validation");

// Create new message
router.post("/", validate(MessageSchema), messageController.create);

// Get all non-deleted messages
router.get("/", verifyToken, isAdmin, messageController.read);

// Get all messages including soft deleted
router.get("/all", verifyToken, isAdmin, messageController.readAll);

// Get one message by id
router.get("/:id", verifyToken, isAdmin, messageController.readOne);

// Update message by id
router.put("/:id", verifyToken, isAdmin, validate(MessageSchema), messageController.update);

// Soft delete message by id
router.delete("/:id", verifyToken, isAdmin, messageController.destroy);

// Restore soft deleted message
router.post("/restore/:id", verifyToken, isAdmin, messageController.restore);

module.exports = router;
