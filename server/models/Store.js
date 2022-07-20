const { default: mongoose } = require("mongoose");
const geocoder =require("../utils/geocoder");


const StoreSchema = new mongoose.Schema({
    storeId:{
        type:String,
        required:[true,'please add a store ID'],
        unique:true,
        trim:true,
        maxLength:[10,'store ID must be less than 10 chars']
    },

    address:{
        type: String,
        required:[true, 'please add an adress']
    },

    location: {
        type: {
          type: String, 
          enum: ['Point']
  
        },
        coordinates: {
          type: [Number],
          index:'2dsphere'  // 2dsphere supports queries that calculate geometries on an earth-like sphere 
        },

        formattedAddress:String,

      },

      createdAt:{
          type:Date,
          default:Date.now
      }

});

//geocode and create location 

StoreSchema.pre('save',async function (next){
  const loc = await geocoder.geocode(this.address);
  this.location={
    type:'Point',
    coordinates:[loc[0].longitude,loc[0].latitude],
    formattedAddress:loc[0].formattedAddress
  }

  // do not save adress 

  this.adress =undefined ;
  next()
  
})

module.exports = mongoose.model('Store',StoreSchema);