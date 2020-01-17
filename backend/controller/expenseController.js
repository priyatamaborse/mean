var express = require('express');
var expense = require('../model/expense.js');

exports.getExpense=(req,res,next)=>{
    expense.find(function(err,expense){
        if(err){
            res.json(err);
        }
        else{
            res.json(expense);
        }
    })
};

exports.addExpense=(req,res,next)=>{
    console.log(req.body.expenseId+"---");
    let newExpense = new expense({
        expenseId : req.body.expenseId,
        expenseName: req.body.expenseName,
        expenseAmt: req.body.expenseAmt,
        created_At : new Date(),
        updated_At : new Date()
    });
   
    newExpense.save((err,item)=>{

        console.log(newExpense);
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"expense added succesfully"});
        }
    })
};


exports.updateExpense=(req,res,next)=>{
    expense.findOneAndUpdate({"expenseId":req.params.expenseId},{
    $set: {
        expenseName:req.body.expenseName,
        expenseAmt: req.body.expenseAmt,
        created_At:new Date,
        updated_At:new Date
    }
    },
    (err)=>{
        
        if (err)
            res.json(err);
        else
            res.json({ msg: "expense updated successfully" });
    })
}


exports.deleteExpense=(req,res,next)=>{
    expense.remove({"expenseId":req.params.expenseId},(err,result)=>{
        if (err)
            res.json(err);
        else
            res.json(result);
    })
}