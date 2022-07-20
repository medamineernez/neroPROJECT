const express =require('express');
const {getStores , addStores}=require("../controllers/stores")
const router =express.Router();



router.get('/',getStores);
router.post('/',addStores);

 

module.exports =router ;
