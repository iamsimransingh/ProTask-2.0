const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const validator=require('validator');
var task=require('./Task');

var Schema=mongoose.Schema;
var schema=new Schema({
    email:{type:String,required:true,validate:validator.isEmail},
    password:{type:String,required:true},
    username:{type:String,required:true},
    myTask:[task],
    assignedTask:[task]
});



var user=mongoose.model('user',schema);
module.exports=user;