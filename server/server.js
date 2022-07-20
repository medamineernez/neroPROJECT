const path =require("path");
const express =require("express");
const dotenv =require("dotenv");
const cors =require("cors");
const connectDB =require("./config/db");

// load env vars

dotenv.config({ path:'./config/config.env' });

// connect database 

connectDB();

const app = express();
// body parser midd
app.use(express.json());
app.use(cors());

//set static folder 
app.use(express.static(path.join(__dirname , 'public')));

//routes 
app.use('/api/v1/stores',require('./routes/stores')); 
app.use('/api/v1/admin',require('./routes/admin'));
const PORT = process.env.PORT || 3000;

app.listen(PORT ,()=>{

    console.log(`app is listening on ${PORT}`);
    console.log(`app is in ${process.env.NODE_ENV} mode `);

});