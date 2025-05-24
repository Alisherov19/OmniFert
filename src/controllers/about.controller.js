const { About } = require("../models");
const { asyncHandler } = require("../utils");

// CREATE
const create = asyncHandler(async (req, res, next) => {
  const { image, title, big_title, paragraph, btn } = req.body;
  const created = await About.create({ image, title, big_title, paragraph, btn });
  res.status(201).json({ success: true, created });
});


const read = asyncHandler(async (req, res, next) => {
  const all = await About.findAll();
  res.status(200).json({ success: true, all });
});


const readAll = asyncHandler(async (req, res, next) => {
  const all = await About.findAll({ paranoid: false });
  if (!all || all.length === 0) {
    const error = new Error("About data not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});


const readOne = asyncHandler(async (req, res, next) => {
  const one = await About.findByPk(req.params.id);
  if (!one) {
    const error = new Error("About not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, one });
});


const update = asyncHandler(async (req, res, next) => {
  const find = await About.findByPk(req.params.id);
  if (!find) {
    const error = new Error("About not found");
    error.statusCode = 404;
    return next(error);
  }
  await find.update(req.body);
  res.status(203).json({ success: true, updated: find });
});


const destroy = asyncHandler(async (req, res, next) => {
  const find = await About.findByPk(req.params.id);
  if (!find) {
    const error = new Error("About not found");
    error.statusCode = 404;
    return next(error);
  }
  await find.destroy();
  res.status(203).json({ success: true, deleted: find });
});


const restore = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await About.restore({ where: { id } });
  res.status(203).json({ success: true, message: "About restored" });
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
