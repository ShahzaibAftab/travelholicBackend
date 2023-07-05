const Express = require('express')
const myRouter = Express.Router();

const userCustomizedTripsschema = require('../../schema/user/userCustomizedTrips')

myRouter.get('/Display', async (req, res) => {
    // await res.status(200).send('test')
    try {
        const userData = await userCustomizedTripsschema.find();
        res.status(200).send(userData)
    } catch (error) {
        res.status(404).send('Error:', error)
    }
})

myRouter.post('/Upload', async (req, res) => {
    const { userId, vendorId, customizedtripId, tripFrom, tripTo, tripDate, tripTime, tripDetails } = req.body;
    try {
        const postData = new userCustomizedTripsschema({
            userId, vendorId, customizedtripId, tripFrom, tripTo, tripDate, tripTime, tripDetails
        })
        const dataCheck = await postData.save();
        if (dataCheck) {
            res.status(201).send('Record Saved')
        }
    } catch (error) {
        res.status(500).send('error', error)
    }
})

module.exports = myRouter;