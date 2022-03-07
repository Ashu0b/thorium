const mongoose=require("mongoose");
const purchaseSchema = new mongoose.Schema({

    userId:String,
    proucctId : String,
    amount : Number,
    isFreeAppUser : Boolean

});
    module.exports=mongoose.model('purchase',purchaseSchema)
    
