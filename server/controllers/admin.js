const dotenv =require("dotenv");
const Admin = require("../models/Admin");
dotenv.config({ path:'../config/config.env' });
const keys =require('../config/keys');
const jwt=require("jsonwebtoken")
// get all stores 
// GET /api/v1/stores 
//access public 


exports.logIn=(req,res,next)=>{

    const admin = new Admin({
      
        email: req.body.email,
        password: req.body.password,
       
      });
    
      if (
        admin.email === process.env.ADMIN_EMAIL &&
        admin.password === process.env.ADMIN_PASSWORD
      ) {
        const payload = { name: admin.name }; // Create JWT Payload
    
        // Sign Token
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        });
      } else {
        res.status(400).json({"message" :"password incorrect "})
      }
    }
