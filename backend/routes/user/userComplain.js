const Express=require('express')
const myRouter=Express.Router();

const userComplainSchema=require('../../schema/user/userComplain')

myRouter.get('/Display', async (req,res)=>{
    try {
        const c=await userComplainSchema.find()
        return res.status(200).send(c)
    } catch (error) {
        return res.status(500).send('Error:',error)
    }
})

myRouter.post('/Upload', async(req,res)=>{
    try {
        const {userEmail,userName,complainType,complainDetails,solved }=req.body;
        const postData=new userComplainSchema({
            userEmail,userName,complainType,complainDetails,solved
        })
       const c = await postData.save()
       if(c)
       {
    return res.status(201).send(c)
       }
    } catch (error) {
        return res.send(error).status(400)
    }
})

module.exports=myRouter;