require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.error("Connection failed", err));
const app = express();

const MySchema= new mongoose.Schema({
    name :{
        type:String,
        required:true,
        unique:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    pNumber :{
        type:Number,
        required:true,
        unique:false
    },
    password:{
        type:Number,
        required:true,
        unique:false
    },
    acres :{
        type:Number,
        required:true,
        unique:false
    },
    location :{
        type:String,
        required:true,
        unique:false,
        default:"Rwanda,Kigali"
    },
     cropType :{
        type:String,
        required:true,
        unique:false,
    },
   issuedTime :{
        type:Date,
        required:true,
        unique:false
    }
});
const user =mongoose.model("User",MySchema);





app.use(express.json());
app.post('/signup', (req,res)=>{
    const name = req.body.name;
    const pNumber =  req.body.pnumber;
    const email = req.body.email;
    const password =req.body.password;
    const acres = req.body.acres;
    const location = req.body.location;
    const cropType = req.body.croptype;
    const issuedTime = req.body.issuedtime;
res.send('Account created successfully!')})
app.listen(4000,()=>{
    console.log('listening on port 400O!')
})


