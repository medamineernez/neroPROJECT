const express =require('express');
const {logIn}=require("../controllers/admin")
const router =express.Router();




router.post('/',logIn);

 

module.exports =router ;