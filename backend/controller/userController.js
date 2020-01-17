var express = require('express');
var user = require('../model/user.js');


exports.getUsers=(req,res,next)=>{
    user.find(function(err,users){
        if(err){
            res.json(err);
        }
        else{
            res.json(users);
        }
    })
};

exports.registerUser=(req,res,next)=>{
    let newUser = new user({
    Id: req.body.Id,
    Name: req.body.Name,
    Password: req.body.Password,
    Status: req.body.Status,
    Phone: req.body.Phone,
    Email: req.body.Email,
    loginName: req.body.loginName,
    Role: req.body.Role,
    });
   
    newUser.save((err,item)=>{

        console.log(newUser);
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"user added succesfully"});
        }
    })
};

exports.loginUser=(req,res,next)=>{

    user.find({"Id":req.body.Id,"Password":req.body.Password},function(err){

        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"user login succesfully"});
        }

    });

};


exports.updateUser=(req,res,next)=>{
    user.findOneAndUpdate({"Id":req.params.Id},{
    $set: {
    Name: req.body.Name,
    Password: req.body.Password,
    Status: req.body.Status,
    Phone: req.body.Phone,
    Email: req.body.Email,
    loginName: req.body.loginName,
  
    }
    },
    (err)=>{
        
        if (err)
            res.json(err);
        else
            res.json({ msg: "user updated successfully" });
    })
}


exports.deleteUser=(req,res,next)=>{
    user.remove({"Id":req.params.Id},(err,result)=>{
        if (err)
            res.json(err);
        else
            res.json(result);
    })
}