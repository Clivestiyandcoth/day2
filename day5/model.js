const mongoose = require('mongoose');

 
mongoose.connect("mongodb+srv://stiyan:clivestiyan@cluster0.zcodfz5.mongodb.net/?retryWrites=true&w=majority")

// Schema creation
let Schema=  mongoose.Schema;

const studentSchema = new Schema({
    sname:String,
    sgrade:Number,
    sage:Number,
    semail:String
});

var studentmodel = mongoose.model("students",studentSchema);

module.exports=studentmodel;
