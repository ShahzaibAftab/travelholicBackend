const Express = require('express')
const myRouter = Express.Router()

const tripsOrganizedSchema = require('../../schema/vendor/TripsOrganized')

myRouter.post('/Upload',  async (req, res) => {
    try {
        const { vendorEmail, tripId, tripFrom,tripDuration, tripTo, tripDate,tripTiming, tripStatus,tripSeats,tripPrice,tripDescription } = req.body;
        const postData = new tripsOrganizedSchema({
            vendorEmail, tripId, tripFrom,tripDuration, tripTo, tripDate,tripTiming, tripStatus,tripSeats,tripPrice,tripDescription
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

myRouter.get('/Display', async (req, res) => {
    try {
        const c = await tripsOrganizedSchema.find()
        return res.status(200).send(c)
    } catch (error) {
        return res.status(404).send(error)
    }
})

myRouter.get('/DisplayTable', async (req, res) => {
    try {
      const { vendorEmail } = req.query;
  
      const rows = await tripsOrganizedSchema.find({ vendorEmail });
  
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      return res.send(rows);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  

  

module.exports = myRouter