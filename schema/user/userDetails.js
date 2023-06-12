const mongoose=require('mongoose')
const userDetails=new mongoose.Schema({
    userId:{
        type:String        
    },
    userName:{
        type:String
    },
    userContact:{
        type:Number
    },
    userEmail:{
        type:String
    },
    userPassword:{
        type:String
    },
    accountDate:{
        type:Date,
        default: Date.now
    },
    totalTours:{
        type:Number
    },
    totalFlights:{
        type:Number
    }

})

module.exports=mongoose.model('userDetails',userDetails)