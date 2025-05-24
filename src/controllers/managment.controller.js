const { Management } = require("../models");
const { asyncHandler } = require("../utils");

// CREATE
const create = asyncHandler(async (req, res, next) => {
  const { image, title, work } = req.body;
  const created = await Management.create({ image, title, work });
  res.status(201).json({ success: true, created });
});

// READ all (faqat soft delete qilinmaganlar)
const read = asyncHandler(async (req, res, next) => {
  const all = await Management.findAll();
  if (!all.length) {
    const error = new Error("No management records found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ all (hammasi, shu jumladan soft deleted)
const readAll = asyncHandler(async (req, res, next) => {
  const all = await Management.findAll({ paranoid: false });
  if (!all.length) {
    const error = new Error("No management records found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ ONE by ID
const readOne = asyncHandler(async (req, res, next) => {
  const one = await Management.findByPk(req.params.id);
  if (!one) {
    const error = new Error("Management record not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, one });
});

// UPDATE
const update = asyncHandler(async (req, res, next) => {
  const record = await Management.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Management record not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.update(req.body);
  res.status(203).json({ success: true, record });
});

// DELETE (soft delete)
const destroy = asyncHandler(async (req, res, next) => {
  const record = await Management.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Management record not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.destroy();
  res.status(203).json({ success: true, message: "Deleted successfully" });
});

// RESTORE
const restore = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await Management.restore({ where: { id } });
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
