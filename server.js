const express = require('express');
const mongoose= require('mongoose');
const uri = "mongodb+srv://tetaangelbless014_db_user:8VnDjW3PJQG3SAM1@cluster0.nttagx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
        type:String,
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
const User =mongoose.model("User",MySchema);
mongoose.connect(uri)
.then(()=>console.log("Connection successfull!"))
.catch(()=>console.error("Connection failed", err));



app.use(express.json());
app.post('/signup', (req,res)=>{
    const name = req.body.name;
    const pnumber =  req.body.pnumber;
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


