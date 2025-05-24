const errorHandler = (err,req,res,next) =>{
    console.log(err);

    const statusCode = err.statusCode || 500
    const message = err.message || "This error hasn't waited yet"
    res.status(statusCode).json({
        success:false,
        message,
        data:null
    })

}
module.exports = errorHandler