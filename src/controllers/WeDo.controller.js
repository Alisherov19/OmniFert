const { success } = require("zod/v4")
const {WeDo} = require("../models")
const { asyncHandler } = require("../utils")

const read = asyncHandler(async (req,res,next)=>{
    const read = await WeDo.findAll()
    res.status(200).json({success:true, read})
})

const readOne = asyncHandler(async(req,res,next)=>{
    const readOne = await WeDo.findByPk(req.params.id)
    if(!readOne){
        const error = new Error("Data not found")
        error.statusCode = 404
        return next(error)
    }
    res.status(200).json({
        success:true,
        readOne
    })
})

const readAll = asyncHandler(async (req,res,next)=>{
    const readAll = await WeDo.findAll({paranoid:false})
    res.status(200).json({success:true, readAll})
})

const create = asyncHandler(async(req,res,next)=>{
    const {image,title,big_title,paragraph} = req.body
    const created = await WeDo.create({image,title,big_title,paragraph})
    res.status(201).json({success:true,created})
})

const update = asyncHandler(async(req,res,next)=>{
    const find = await WeDo.findByPk(req.params.id)
    if(!find){
        const error = new Error("Data Not found")
        error.statusCode = 404
        return next(error)
    }
    await find.update(req.body)
    res.status(203).json({
        success:true,
        find
    })
})

const destroy = asyncHandler(async(req,res,next)=>{
    const find = await WeDo.findByPk(req.params.id)
    if(!find){
        const error = new Error("Data Not found")
        error.statusCode = 404
        return next(error)
    }
    await find.destroy()
    res.status(203).json({
        success:true,
        find
    })
})

const restore = asyncHandler(async(req,res,next)=>{
    const { id } = req.params;
    const restored = await WeDo.restore({ where: { id } });
  res.status(203).json({ success: true, message: "Data restored",restored });
})

module.exports = {
    read,
    readAll,
    readOne,
    restore,
    create,
    update,
    destroy
};
