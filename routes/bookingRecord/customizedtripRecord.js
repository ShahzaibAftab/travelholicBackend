const Express=require('express') 
const myRouter=Express.Router()

const customizedtripSchema=require('../../schema/bookingRecord/customizedtripRecord')

myRouter.get('/Display',async(req,res)=>{
    try {
        const c=await customizedtripSchema.find()
        res.status(200)
        res.send(c)
    } catch (error) {
        res.status(404)
        res.send('Error:',error)        
    }
})

myRouter.post('/Upload',async(req,res)=>{
    try {
        const{customizedtripId,vendorId,tripFrom,tripTo,userId,tripDate,tripTime,usertripDetails,selectedBidRate,offeredRate}=req.body;
        const postData=new customizedtripSchema({
            customizedtripId,vendorId,tripFrom,tripTo,userId,tripDate,tripTime,usertripDetails,selectedBidRate,offeredRate
        })
       let c= await postData.save()
       {
        if(c)
        {
            res.status(201)
            res.send(c)
        }
       }
    } catch (error) {
       res.status(500)
       res.send(error) 
    }
})

module.exports=myRouter