module.exports = (schema) => async ( req,res,next)=>{
    try{
        req.body = await schema.parseAsync(req.body)
        next()
    }catch(err){
        if(err.errors){
            return res.status(400).json({
                success:false,
                message:"validation error",
                errors: err.errors.map((e)=> e.message),
            })
        }
         return res.status(500).json({
        message: "Internal  error",
       
      });
      console.log(err);
    }
}