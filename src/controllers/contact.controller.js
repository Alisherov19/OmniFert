const { Contact } = require("../models");
const { asyncHandler } = require("../utils");

// CREATE
const create = asyncHandler(async (req, res, next) => {
  const { email, office, phone, map, certificates } = req.body;
  const created = await Contact.create({ email, office, phone, map, certificates });
  res.status(201).json({ success: true, created });
});

// READ all (faqat mavjudlar, o‘chirilmaganlar)
const read = asyncHandler(async (req, res, next) => {
  const all = await Contact.findAll();
  if (!all.length) {
    const error = new Error("No contact records found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ all (hammasi, shu jumladan soft deleted)
const readAll = asyncHandler(async (req, res, next) => {
  const all = await Contact.findAll({ paranoid: false });
  if (!all.length) {
    const error = new Error("No contact records found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ ONE
const readOne = asyncHandler(async (req, res, next) => {
  const one = await Contact.findByPk(req.params.id);
  if (!one) {
    const error = new Error("Contact record not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, one });
});

// UPDATE
const update = asyncHandler(async (req, res, next) => {
  const record = await Contact.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Contact record not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.update(req.body);
  res.status(203).json({ success: true, record });
});

// DELETE (soft delete)
const destroy = asyncHandler(async (req, res, next) => {
  const record = await Contact.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Contact record not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.destroy();
  res.status(203).json({ success: true, message: "Deleted successfully" });
});

// RESTORE
const restore = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await Contact.restore({ where: { id } });
  res.status(203).json({ success: true, message: "Restored successfully" });
});

module.exports = {
  create,
  read,
  readAll,
  readOne,
  update,
  destroy,
  restore
};
