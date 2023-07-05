const Express = require('express');
const myRouter = Express.Router();

const userDetails = require('../../schema/user/userDetails');

myRouter.get('/Display', async (req, res) => {
    const c = await userDetails.find();
    try {
        res.status(200).send(c)
    } catch (error) {
        res.status(404).send('unable to retrive: ', error)
    }
});

myRouter.post('/Upload', async (req, res) => {
    const { userId, userName, userContact, userEmail, userPassword, accountDate, totalTours, totalFlights } = req.body;
    const addData = new userDetails({
        userId, userName, userContact, userEmail, userPassword, accountDate, totalTours, totalFlights
    })
   const r= await addData.save();
   if(r){
    res.status(201);
    res.send(r)
}
})

module.exports = myRouter;


