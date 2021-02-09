const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const validator=require('validator');

var Schema=mongoose.Schema;
var task=mongoose.Schema({
    Task:{type:String,required:true},
    status:{type:String,},
    assignedTo:{type:String},
    assignedBy:{type:String},
    progress:{type:Number,default:0}
});


module.exports=task;
