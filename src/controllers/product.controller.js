
const {Product} = require("../models")
const {asyncHandler} = require("../utils")


const create = asyncHandler(async (req,res,next)=>{
    const {status, image, name, price, discount, star, category, image_1, image_2, image_3} = req.body
    const create = await Product.create({status, image, name, price, discount, star, category, image_1, image_2, image_3})
    res.status(201).json({success:true,create})
})

const read = asyncHandler(async(req,res,next)=>{
    const readUser = await Product.findAll()
    if(!readUser){
        const error = new Error("Data is not found", [readUser])
        error.statusCode = 404
        return next(error) 
    }
    res.status(200).json({success:true, readUser})
})

const readOne = asyncHandler(async(req,res,next)=>{
    const read = await Product.findByPk(req.params.id)
    if(!read){
        const error = new Error("Data is not found", [read])
        error.statusCode = 404
        return next(error) 
    }
    res.status(200).json({success:true, read})
})
const readAll = asyncHandler(async(req,res,next)=>{
    const read = await Product.findAll({paranoid:false})
    if(!read){
        const error = new Error("Data is not found", [read])
        error.statusCode = 404
        return next(error) 
    }
    res.status(200).json({success:true, read})
})


const readCategories = asyncHandler(async (req, res, next) => {
    const { category } = req.query;
    console.log("Category from query:", category); // 👈 debug

    // faqat category kelgan bo‘lsa filtering qilamiz
    const whereClause = category ? { category } : {};

    const read = await Product.findAll({ where: whereClause });

    if (!read || read.length === 0) {
        const error = new Error("Data is not found");
        error.statusCode = 404;
        return next(error);
    }

    res.status(200).json({ success: true, read });
});

module.exports = {
    readCategories
};



const update = asyncHandler(async(req,res,next)=>{
    const update = await Product.findByPk(req.params.id)
    if(!update){
        const error = new Error("Data is not found", [update])
        error.statusCode = 404
        return next(error) 
    }
    await update.update(req.body)
    res.status(203).json({success:true,update})
})

const destroy = asyncHandler(async(req,res,next)=>{
    const user = await Product.findByPk(req.params.id)
    if(!user){
        const error = new Error("Data is not found", [user])
        error.statusCode = 404
        return next(error) 
    }
    await user.destroy()
    res.status(203).json({success:true,user})
})

const restore = asyncHandler(async(req,res,next)=>{
    const {id} = req.params
    const user = await Product.restore({where : {id}})
    res.status(203).json({success:true,user})
})

module.exports = {
    read,
    readAll,
    readOne,
    readCategories,
    restore,
    create,
    update,
    destroy
};


