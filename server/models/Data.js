const mongoose = require("mongoose");



const DataSchema = new mongoose.Schema({

    storeId:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Store",
    },

    temperature:{
        type:String
    },

    co2Concentration:{
        type:String
    },

    methaneonConcentration:{
        type:String
    },

    airHumidity:{
        type:String
    },

    flameSensor:{
        type:Boolean
    }
});



module.exports = mongoose.model('Data',DataSchema);