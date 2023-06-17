const mongoose=require('mongoose');
const DB = 'mongodb://localhost:27017/TravelholicDB'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Database Connected')).catch((error)=>console.log(error.message));