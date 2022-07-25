
const jwt = require ('jsonwebtoken');
const { model } = require('mongoose');
dotenv.config({ path:'../config/config.env' });


module.exports =function(req,res,next){
    // get tocken from the header 

    const token =req.header('x-auth-token');


    //nchoufou aslan fama token wala leee

    if(!token){
        return res.status(401).json({ msg:"sorry bad auth"})
    }

    // verify token 

    try{
        const decoded =jwt.verify(token,process.env.JWT_KEY);
        req.user = decoded.user
        next();

    }catch(err){
       res.status(401).json({msg:"token is not valid"}) 
    }
}