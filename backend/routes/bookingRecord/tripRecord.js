const Express=require('express') 
const myRouter=Express.Router()

const tripRecordSchema=require('../../schema/bookingRecord/tripRecord')

myRouter.get('/Display',async(req,res)=>{
    try {
        const c=await tripRecordSchema.find()
        return res.status(200).send(c)
    } catch (error) {
        return res.status(404).send('Error:',error)        
    }
})

myRouter.post('/Upload',async(req,res)=>{
    const{tripId,vendorEmail,tripFrom,tripTo,userId,tripDate,tripTime,tripSeats,tripPrice,ClientName,ContactNo,NumberOfSeats,TotalAmount}=req.body;
    try {
        const postData=new tripRecordSchema({
            tripId,vendorEmail,tripFrom,tripTo,userId,tripDate,tripTime,tripSeats,tripPrice,ClientName,ContactNo,NumberOfSeats,TotalAmount
        })
       let c= await postData.save()
       {
        if(c)
        {
            return res.status(201).send(c)
        }
       }
    } catch (error) {
        return res.status(500).send(error) 
    }
})

module.exports=myRouter