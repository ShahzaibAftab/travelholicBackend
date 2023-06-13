const mongoose=require('mongoose')
const tripRecord=new mongoose.Schema({
    tripId:{
        type:Number
    },
    vendorId:{
        type:String
    },
    tripFrom:{
        type:String
    },
    tripTo:{
        type:String
    },
    userId:{
        type:String
    },
    tripDate:{
        type:Date
    },
    tripTime:{
        type:String
    },
    tripSlots:
    {
        type:Number
    },
    tripRate:{
        type:Number
    }
});
module.exports=mongoose.model('tripRecord',tripRecord)