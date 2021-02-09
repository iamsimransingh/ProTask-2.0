var express=require('express');
var router=express.Router({ mergeParams: true });

var task=require('../Models/Task');
var user=require('../Models/User');

router.post('/signup',(req,res)=>{
    user.findOne({email:req.body.email}).then((result)=>{
        if(result)
          res.send("User already Exists");
        else
        {
            
            var User=new user({
                email:req.body.email,
                password:req.body.password,
                username:req.body.username,
                myTask:[],
                assignedTask:[]
            });
            User.save().then((result)=>{
                console.log("User Created");
                res.send(result);
            }).catch((err)=>{
                res.send(err)
            });
        }  
    }).catch((err)=>{
        res.send(err);
    })
});

router.post('/login',(req,res)=>{
    
    user.find({email:req.body.email,password:req.body.password}).then((result)=>{
        console.log(result)
        res.send(result[0]);
    }).catch((e)=>{
        res.status(400).send("Could not find user");
    })
})

router.post('/getUser',(req,res)=>{
    console.log(req.body)
   user.findOne({username:req.body.username}).then((result)=>{
          console.log(result);
         res.send(result);
   }).catch((err)=>{
       res.send(err);
   })
})

module.exports=router;
