const router = require("express").Router();
const authMDl = require("../middlewares/auth.mdl");
const ObjectiveCTRL = require("../controllers/objective.controller");
const validate = require("../middlewares/validate.mdl");
const { idealObjectiveSchema } = require("../validations/objective.validate"); // Faraz qilayapman, validation shu nomda

router.post(
  "/",
  authMDl.verifyToken,
  authMDl.isAdmin,
  validate(idealObjectiveSchema),
  ObjectiveCTRL.create
);

router.delete(
  "/:id",
  authMDl.verifyToken,
  authMDl.isAdmin,
  ObjectiveCTRL.destroy
);

router.put(
  "/:id",
  authMDl.verifyToken,
  authMDl.isAdmin,
  validate(idealObjectiveSchema),
  ObjectiveCTRL.update
);

router.put(
  "/rest/:id",
  authMDl.verifyToken,
  authMDl.isAdmin,
  ObjectiveCTRL.restore
);

router.get("/", ObjectiveCTRL.read);

router.get("/all", ObjectiveCTRL.readAll);

router.get("/:id", authMDl.verifyToken, ObjectiveCTRL.readOne);

module.exports = router;
