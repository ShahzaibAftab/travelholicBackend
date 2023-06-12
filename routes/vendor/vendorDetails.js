const Express=require('express')
const myRouter=Express.Router()

const vendorDetailsSchema=require('../../schema/vendor/vendorDetails')

myRouter.get('/Display',async(req,res)=>{
    try {
        const c=await vendorDetailsSchema.find()
       return res.status(200).send(c)
    } catch (error) {
        return res.status(404).send(error)        
    }
})
myRouter.post('/login', async (req, res) => {
  const { vendorEmail, vendorPassword } = req.body;

  try {
    const user = await vendorDetailsSchema.findOne({ vendorEmail: vendorEmail });

    if (!user) {
      return res.status(404).json({ error: 'Invalid email or password' });
    }

    // Check the password
    if (user.vendorPassword !== vendorPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    // Successful login
    return res.json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

myRouter.post('/Upload', async (req, res) => {
    try {
      const { vendorName, vendorContact, vendorEmail, vendorPassword, vendorCnic, totalTours, totalFlights } = req.body;
  
      // Check if the email already exists in the database
      const existingVendor = await vendorDetailsSchema.findOne({ vendorEmail });
      if (existingVendor) {
        return res.status(409).send('Email already exists'); // Return a 409 Conflict status code indicating the email already exists
      }
  
      const postData = new vendorDetailsSchema({
        vendorName, vendorContact, vendorEmail, vendorPassword, vendorCnic, totalTours, totalFlights
      });
      const savedData = await postData.save();
      if (savedData) {
        return res.status(201).send(savedData);
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  myRouter.get('/Selective-Details', async (req, res) => {
    try {
      const { vendorEmail } = req.query;
  
      const row = await vendorDetailsSchema.findOne({ vendorEmail });
  
      if (!row) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      return res.send(row);
    } catch (error) {
      return res.status(500).send(error);
    }
  });

module.exports=myRouter