// 1. import 
const express = require('express');
const studentmodel =require('./model')
const cors=require('cors')

// 2.initializing
const app = new express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use (cors())
//  3.api
// to post data
app.post('/create',(req,res)=>{
    var result =new studentmodel(req.body)
    result.save()
    res.send("data added");
})
// to view data
app.get('/view',async(req,res)=>{
     var data =await studentmodel.find();
     res.json(data)

})

// delete
app.delete('/delete/:id',async(req,res)=>{
    var id = req.params.id;
    await studentmodel.findByIdAndDelete(id);
    res.send("delete")

})

//update
app.put('/update/:id',async (req,res)=>{
    let id = req.params.id
var result = await studentmodel.findByIdAndUpdate(id,req.body);
res.send("updated")
})


// 4.port
app.listen(8080,()=>{
    console.log("port is set and running")

})