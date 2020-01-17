var express = require('express');
var category = require('../model/category.js');

exports.getCategory=(req,res,next)=>{
    category.find(function(err,category){
        if(err){
            res.json(err);
        }
        else{
            res.json(category);
        }
    })
};

exports.addCategory=(req,res,next)=>{
    console.log(req.body.categoryId+"---");
    let newCategory = new category({
        categoryId : req.body.categoryId,
        categoryName: req.body.categoryName,
        created_At : new Date(),
        updated_At : new Date()
    });
   
    newCategory.save((err,item)=>{

        console.log(newCategory);
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"category added succesfully"});
        }
    })
};


exports.updateCategory=(req,res,next)=>{
    category.findOneAndUpdate({"categoryId":req.params.categoryId},{
    $set: {
        categoryName:req.body.categoryName,
        created_At:new Date,
        updated_At:new Date
    }
    },
    (err)=>{
        
        if (err)
            res.json(err);
        else
            res.json({ msg: "category updated successfully" });
    })
}


exports.deleteCategory=(req,res,next)=>{
    category.remove({"categoryId":req.params.categoryId},(err,result)=>{
        if (err)
            res.json(err);
        else
            res.json(result);
    })
}