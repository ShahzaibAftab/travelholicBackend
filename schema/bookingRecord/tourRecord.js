const mongoose=require('mongoose')
const tourRecord=new mongoose.Schema({
    tourId:{
        type:Number
    },
    vendorEmail:{
        type:String
    },
    tourFrom:{
        type:String
    },
    tourTo:{
        type:String
    },
    userId:{
        type:String
    },
    tourDate:{
        type:Date
    },
    tourTime:{
        type:String
    },
    tourSlots:
    {
        type:Number
    },
    tourRate:{
        type:Number
    }

});
module.exports=mongoose.model('tourRecord',tourRecord)