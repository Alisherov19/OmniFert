const { Objective } = require("../models");
const { asyncHandler } = require("../utils");

// CREATE new objective
const create = asyncHandler(async (req, res, next) => {
  const { image, title, parag } = req.body;
  const created = await Objective.create({ image, title, parag });
  res.status(201).json({ success: true, created });
});

// READ all objectives (soft deleted emaslari)
const read = asyncHandler(async (req, res, next) => {
  const all = await Objective.findAll();
  if (!all || all.length === 0) {
    const error = new Error("Objectives not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ all objectives (paranoid false bilan, ya'ni soft deleted ham)
const readAll = asyncHandler(async (req, res, next) => {
  const all = await Objective.findAll({ paranoid: false });
  if (!all || all.length === 0) {
    const error = new Error("Objectives not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, all });
});

// READ one objective by id
const readOne = asyncHandler(async (req, res, next) => {
  const one = await Objective.findByPk(req.params.id);
  if (!one) {
    const error = new Error("Objective not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ success: true, one });
});

// UPDATE objective by id
const update = asyncHandler(async (req, res, next) => {
  const find = await Objective.findByPk(req.params.id);
  if (!find) {
    const error = new Error("Objective not found");
    error.statusCode = 404;
    return next(error);
  }
  await find.update(req.body);
  res.status(203).json({ success: true, find });
});

// SOFT DELETE objective by id
const destroy = asyncHandler(async (req, res, next) => {
  const find = await Objective.findByPk(req.params.id);
  if (!find) {
    const error = new Error("Objective not found");
    error.statusCode = 404;
    return next(error);
  }
  await find.destroy();
  res.status(203).json({ success: true, find });
});

// RESTORE soft deleted objective by id
const restore = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await Objective.restore({
    where: { id },
  });
  res.status(203).json({ success: true });
});

module.exports = {
  create,
  read,
  readOne,
  update,
  destroy,
  restore,
  readAll,
};
