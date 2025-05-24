const { success } = require("zod/v4");
const { Article } = require("../models/");
const {asyncHandler} = require("../utils");

const createArticle = asyncHandler(async (req, res) => {
  const { image, title, date,desc } = req.body;
  const article = await Article.create({ image, title, date,desc });
  res.status(201).json({ success: true, article });
});

const readAllArticles = asyncHandler(async (req, res) => {
  const articles = await Article.findAll();
  res.status(200).json({ success: true, articles });
});

const RealReadAll = asyncHandler(async (req, res) => {
  const articles = await Article.findAll({paranoid:false});
  res.status(200).json({ success: true, articles });
});

const readOneArticle = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const article = await Article.findByPk(id);
  if (!article) {
    res.status(404);
    throw new Error("Article not found");
  }
  res.status(200).json({ success: true, article });
});

const updateArticle = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const article = await Article.findByPk(id);
  if (!article) {
    res.status(404);
    throw new Error("Article not found");
  }
  await article.update(req.body)
  res.status(200).json({ success: true, article });
});

const deleteArticle = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const article = await Article.findByPk(id);
  if (!article) {
    res.status(404);
    throw new Error("Article not found");
  }

  await article.destroy();

  res.status(204).json({ success: true, message: "Article soft deleted",article });
});

const restoreArticle = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const article = await Article.findOne({
    where: { id },
    paranoid: false,
  });

  if (!article) {
    res.status(404);
    throw new Error("Article not found");
  }

  await article.restore();

  res.status(200).json({ success: true, message: "Article restored", article });
});

const readBYDate = asyncHandler(async(req,res,next)=>{
  const articles = await Article.findAll({
  order: [["date", "DESC"]],
  limit: 3,       
  offset: 0,       
  paranoid: true
});
if(!articles){
  const error = new Error("articles not found")
  error.statusCode = 404
  return next(error)
}
res.status(200).json({success:true,articles})

})

module.exports = {
  createArticle,
  readAllArticles,
  readOneArticle,
  updateArticle,
  deleteArticle,
  restoreArticle,
  RealReadAll,
  readBYDate
};
