const express=require('express');
const {addData,getData}=require("../controllers/data");
const router = express.Router();


router.post('/',addData);
router.get('/',getData);

module.exports = router;