const { Message } = require("../models");
const { asyncHandler } = require("../utils");

// CREATE
const create = asyncHandler(async (req, res, next) => {
  const { fullName, email, subject, message } = req.body;
  const created = await Message.create({ fullName, email, subject, message });
  res.status(201).json({ success: true, created });
});

// READ all (faqat mavjudlar)
const read = asyncHandler(async (req, res, next) => {
  const all = await Message.findAll();
  if (!all.length) {
    const error = new Error("No messages found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ all (barchasi, jumladan o‘chirilganlar)
const readAll = asyncHandler(async (req, res, next) => {
  const all = await Message.findAll({ paranoid: false });
  if (!all.length) {
    const error = new Error("No messages found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ one
const readOne = asyncHandler(async (req, res, next) => {
  const one = await Message.findByPk(req.params.id);
  if (!one) {
    const error = new Error("Message not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, one });
});

// UPDATE
const update = asyncHandler(async (req, res, next) => {
  const record = await Message.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Message not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.update(req.body);
  res.status(203).json({ success: true, record });
});

// DELETE (soft)
const destroy = asyncHandler(async (req, res, next) => {
  const record = await Message.findByPk(req.params.id);
  if (!record) {
    const error = new Error("Message not found");
    error.statusCode = 404;
    return next(error);
  }
  await record.destroy();
  res.status(203).json({ success: true, message: "Deleted successfully" });
});

// RESTORE
const restore = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await Message.restore({ where: { id } });
  res.status(203).json({ success: true, message: "Restored successfully" });
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
