const router = require("express").Router();
const authMDL = require("../middlewares/auth.mdl");
const contactCTRL = require("../controllers/contact.controller");
const validate = require("../middlewares/validate.mdl");
const { contactSchema } = require("../validations/Contact.validate");

// CREATE
router.post("/", authMDL.verifyToken, authMDL.isAdmin, validate(contactSchema), contactCTRL.create);

// UPDATE
router.put("/:id", authMDL.verifyToken, authMDL.isAdmin, validate(contactSchema), contactCTRL.update);

// DELETE (soft delete)
router.delete("/:id", authMDL.verifyToken, authMDL.isAdmin, contactCTRL.destroy);

// RESTORE
router.post("/restore/:id", authMDL.verifyToken, authMDL.isAdmin, contactCTRL.restore);

// READ — faqat mavjud (o‘chirilmaganlar)
router.get("/", contactCTRL.read);

// READ ALL — hammasi (shu jumladan soft-deleted)
router.get("/all", authMDL.verifyToken, authMDL.isAdmin, contactCTRL.readAll);

// READ ONE
router.get("/:id", contactCTRL.readOne);

module.exports = router;
