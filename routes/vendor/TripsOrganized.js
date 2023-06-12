const Express = require('express')
const myRouter = Express.Router()

const tripsOrganizedSchema = require('../../schema/vendor/TripsOrganized')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Trips');
    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage });

myRouter.post('/Upload', upload.single("tripPhoto"), async (req, res) => {
    try {
        let tripPhoto = (req.file) ? req.file.filename : null;
        const { vendorEmail, tripId, tripFrom,tripDuration, tripTo, tripDate,tripTiming, tripStatus,tripSeats,tripPrice,tripDescription } = req.body;
        const postData = new tripsOrganizedSchema({
            vendorEmail, tripId, tripFrom,tripDuration, tripTo, tripDate,tripTiming, tripStatus, tripPhoto,tripSeats,tripPrice,tripDescription
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
  
      const row = await tripsOrganizedSchema.findOne({ vendorEmail });
  
      if (!row) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      return res.send(row);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  

module.exports = myRouter