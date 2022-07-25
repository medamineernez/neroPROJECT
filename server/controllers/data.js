const Data =require("../models/Data");

exports.addData=
    (req, res, next) => {
        const data = new Data({

          storeId: req.body.storeId,
          temperature:req.body.temperature + " "+"°C",
          co2Concentration:req.body.co2Concentration + " "+"ppm",
          methaneonCentration:req.body.methaneonConcentration +" "+"Cubic meters per minute ",
          airHumidity:req.body.airHumidity +" "+"g.m-3",
          flameSensor:req.body.flameSensor

        });
    
        data
          .save()
          .then(() => {
            res.status(201).json({
              message: "data saved successfully!",
            });
          })
          .catch((error) => {
            res.status(400).json({
              error: error,
            });
          });
      }
      

      exports.getData= async (req,res)=> {
        Data.find().populate("storeId")
        .then((datas) => {
        res.status(200).json(datas);
         })
        .catch((error) => {
        res.status(400).json({
         error: error,
         });
        });
     }
