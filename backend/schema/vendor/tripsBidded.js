const mongoose=require('mongoose')
const tripBidded=new mongoose.Schema({
CustomizedtripId:{
    type:Number
},
userId:{
    type:Number,
},
bidRate:{
    type:Number
},
bidDetails:{
    type:String
}
});
module.exports=mongoose.model('tripBidded',tripBidded)