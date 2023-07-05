const Express = require('express')
const myRouter = Express.Router()

const tourRecordSchema = require('../../schema/bookingRecord/tourRecord')

myRouter.get('/Display', async (req, res) => {
    try {
        const c = await tourRecordSchema.find()
        return res.status(200).send(c)
    } catch (error) {
        return res.status(404).send(error)
    }
})

myRouter.post('/Upload', async (req, res) => {
    try {
        const { ClientName, ContactNo, NumberOfSeats, TotalAmount, tourDate, tourDuration, tourFrom, tourId, tourPrice, tourSeats, tourTiming, tourTo, vendorEmail } = req.body;
        const postData = new tourRecordSchema({
            ClientName, ContactNo, NumberOfSeats, TotalAmount, tourDate, tourDuration, tourFrom, tourId, tourPrice, tourSeats, tourTiming, tourTo, vendorEmail
        })
        let c = await postData.save()
        {
            if (c) {
                return res.status(201).send(c)
            }
        }
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = myRouter