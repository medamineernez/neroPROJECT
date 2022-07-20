const Store = require("../models/Store");

// get all stores 
// GET /api/v1/stores 
//access public 


exports.getStores= async (req,res,next)=>{
   try {
       const stores = await Store.find();

       return res.status(200).json({

           success:true,
           count:Store.length,
           data: stores
});

   } catch (error) {

       console.error(error);
       res.status(500).json({error:'server eror'});
       
   }
};


// create a store 
// GET /api/v1/stores 
//access public 


exports.addStores= async (req,res,next)=>{
    try {
        const store = await Store.create(req.body);
        return res.status(200).json({
            
            success:true,
            data:store

        });
} catch (error) {
 
        console.error(error);
        if(error.code ===11000){
            
            return res.status(400).json({error:"this store alredy exist"})

        }
        res.status(500).json({error:'server eror'});
        
    }
 };