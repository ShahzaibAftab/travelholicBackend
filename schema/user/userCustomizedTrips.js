const mongoose=require('mongoose')
const userCustomizedTrips= new mongoose.Schema({

    userId:{
        type:String
    },
    vendorId:{
        type:String
    },
    customizedtripId:{
        type:Number
    },
    tripFrom:{
        type:String
    },
    tripTo:{
        type:String
    },
    tripDate:{
        type:Date,
        default: Date.now
    },
    tripTime:{
        type:String
    },
    tripDetails:{
        type:String
    }
    
});

module.exports=mongoose.model('userCustomizedTrips',userCustomizedTrips)