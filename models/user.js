const mongoose=require("mongoose")

const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    lastName:{
        type:String
    },
    password:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    profession:{
        type:String
    }
})




const User = mongoose.model("mahmo", userSchema); 

module.exports = User;

