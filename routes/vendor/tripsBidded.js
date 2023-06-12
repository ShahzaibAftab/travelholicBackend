const Express=require('express')
const myRouter=Express.Router()

const tripsBiddedSchema=require('../../schema/vendor/tripsBidded')

myRouter.get('/Display',async(req,res)=>{
    try {
        const c=await tripsBiddedSchema.find()
        res.status(200)
        res.send(c)
    } catch (error) {
        res.status(404)
        res.send('Error:',error)        
    }
})

myRouter.post('/Upload',async(req,res)=>{
    try {
        const { CustomizedtripId,userId,bidRate,bidDetails}=req.body;

        const addData=new tripsBiddedSchema({
            CustomizedtripId,userId,bidRate,bidDetails       
        })
        await addData.save()
        res.status(201)
        res.send(addData)
        
    } catch (error) {
        res.status(401)
        res.send(error)
    }
})

module.exports=myRouter