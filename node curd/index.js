const express=require('express');
const app=express();
var cors = require('cors')
app.use(cors())
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
app.use(express.json());
const siva=require('./siva')
mongoose.connect('mongodb://0.0.0.0:27017/myFirstConnect',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("connect");
    }
})

app.get('/',async(req,res)=>{
    const a=await siva.find();
    res.json(a)
})

app.post('/',async(req,res)=>{
    const a=await siva({
        name:req.body.name
    })
    a.save();
    res.json(a)
})

app.get('/:id',async(req,res)=>{
    const {id}=req.params;
    const a=await siva.findById(id);
    res.json(a);
})

app.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const a=await siva.findById(id);
    a.name=req.body.name;
    a.save();
    res.json(a)
})
app.listen(199,()=>console.log("running"))