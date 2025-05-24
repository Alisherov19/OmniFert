const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) =>{
  const token = req.headers.authorization?.split(" ")[1];
  if(!token){
      const error = new Error("token not found")
      error.statusCode = 401
      return next(error)
  }
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token:", decoded); // 🔍 bu yerda rolni ko‘rasiz
      req.user = decoded;
      next();
  } catch(err) {
      return res.status(401).json({message:"invalid token"});
  }
};


const isAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Access denied' });
}   

module.exports = {
    verifyToken,
    isAdmin
};
