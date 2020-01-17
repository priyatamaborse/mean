var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema= mongoose.Schema({

    Id:{
        type:String,
        required: "unique Id required",
        unique : true
    },
    
    Name:{
        type:String,
        required: true
    },

    Password:{
        type:String,
        required: "Password required",
        minlength:[4,'password must be at least 4 char']
    },

    Status:{
          type:String,
         required: true
    },

    Phone:{
        type:Number,
         required: true
    },

    Email:{
        type:String,
         required: "Email required",
         unique: true
    },

    loginName:{
              type:String,
        required: true
    },

    Role:{
        type:String,
         required: true
    }

});

userSchema.pre('save',function(next){
    var user =this;
    if(!user.isModified('Password')){return next()};
    bcrypt.hash(user.Password,10).then((hashedPassword)=>{
    user.Password = hashedPassword;
    next();
})},
function(err){
    next(err);
});

const users = mongoose.model('users',userSchema);
module.exports = users;