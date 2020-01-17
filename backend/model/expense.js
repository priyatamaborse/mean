var mongoose = require('mongoose');

var expenseSchema= mongoose.Schema({

    expenseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required: true
    },
    
    expenseName:{
        type:String,
        required: true
    },
    expenseAmt:{
        type:Number,
        required: true
    },
    created_At:{
        type:Date,
        default: Date.now
    }
    ,
    updated_At:{
        type:Date,
        default: Date.now
    }

})

const expense = mongoose.model('expense',expenseSchema);
module.exports = expense;