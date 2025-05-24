const { CheckOut } = require("../models");
const { asyncHandler } = require("../utils");

// CREATE
const create = asyncHandler(async (req, res, next) => {
  const created = await CheckOut.create(req.body);
  res.status(201).json({ success: true, created });
});

// READ 
const read = asyncHandler(async (req, res, next) => {
  const all = await CheckOut.findAll();
  if (!all.length) {
    const error = new Error("No checkout records found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ ALL 
const readAll = asyncHandler(async (req, res, next) => {
  const all = await CheckOut.findAll({ paranoid: false });
  if (!all.length) {
    const error = new Error("No checkout records found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ ONE
const readOne = asyncHandler(async (req, res, next) => {
  const one = await CheckOut.findByPk(req.params.id);
  if (!one) {
    const error = new Error("Checkout not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, one });
});

// UPDATE
const update = asyncHandler(async (req, res, next) => {
  const record = await CheckOut.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Checkout not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.update(req.body);
  res.status(200).json({ success: true, record });
});

// DELETE (soft delete)
const destroy = asyncHandler(async (req, res, next) => {
  const record = await CheckOut.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Checkout not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.destroy();
  res.status(200).json({ success: true, message: "Deleted successfully" });
});

// RESTORE
const restore = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await CheckOut.restore({ where: { id } });
  res.status(200).json({ success: true, message: "Restored successfully" });
});

module.exports = {
  create,
  read,
  readAll,
  readOne,
  update,
  destroy,
  restore,
};
