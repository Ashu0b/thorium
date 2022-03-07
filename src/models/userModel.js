
const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({

    name:String,
    balance :{
        type : Number,
        default : 100
    } ,
    address : String,
    age : Number,
    isFreeAppUser :{

    type :Boolean,
    default : false,
    }

});
    module.exports=mongoose.model('user',userSchema)
