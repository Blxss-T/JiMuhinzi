const express = require('express');
const app = express();


app.use(express.json());
app.post('/signup', (req,res)=>{
    const name = req.body.name;
    const pnumber =  req.body.pnumber;
    const email = req.body.email;
    const password =req.body.password;
    const acres = req.body.acres;
    const location = req.body.location;
    const croptype = req.body.croptype;
    const issuedtime = req.body.issuedtime;
res.send('Account created successfully!')})
app.listen(4000,()=>{
    console.log('listening on port 400O!')
})
