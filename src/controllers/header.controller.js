const {Header} = require("../models")
const { asyncHandler } = require("../utils")

//CRUD

const create = asyncHandler(async(req,res,next) =>{
    const {title,paragraph,btn,btn_1,img} = req.body
    const create = await Header.create({title,paragraph,btn,btn_1,img})
    res.status(201).json({success:true,create})
})

const read = asyncHandler(async(req,res,next)=>{
    const all = await Header.findAll()
    if(!all){
        const error = new Error("Headers not found")
        error.statusCode = 404
        return next(error)
    }
    res.status(200).json({success:true, all})
})

const readAll = asyncHandler(async(req,res,next)=>{
    const all = await Header.findAll({paranoid:false})
    if(!all){
        const error = new Error("Headers not found")
        error.statusCode = 404
        return next(error)
    }
    res.status(200).json({success:true, all})
})

const readOne = asyncHandler(async(req,res,next)=>{
    const one = await Header.findByPk(req.params.id)
    if(!one){
        const error = new Error("Header not found")
        error.statusCode = 404
        return next(error)
    }
    res.status(200).json({success:true, one})
})

const update = asyncHandler(async(req,res,next)=>{
    const find = await Header.findByPk(req.params.id)
    if(!find){
        const error = new Error("Header not found")
        error.statusCode = 404
        return next(error)
    }
     await find.update(req.body);
      res.status(203).json({success:true, find})
})

const destroy = asyncHandler(async(req,res,next)=>{
      const find = await Header.findByPk(req.params.id)
    if(!find){
        const error = new Error("Header not found")
        error.statusCode = 404
        return next(error)
    }
    await find.destroy()
      res.status(203).json({success:true, find})
})
const restore = asyncHandler(async(req,res,next)=>{
    const {id} = req.params
       await Header.restore({
      where: { id }
})
      res.status(203).json({success:true,})
})


module.exports = {
    create,
    read,
    readOne,
    update,
    destroy,
    restore,
    readAll
};

