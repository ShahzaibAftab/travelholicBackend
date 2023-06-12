const Express = require('express')
const myRouter = Express.Router()
const adminDetailsSchema = require('../../schema/admin/adminDetails')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Admin');
    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage });

myRouter.post('/Upload', upload.single('UserPhoto'), async (req, res) => {

    let UserPhoto = (req.file) ? req.file.filename : null;
    const { adminName, adminId, adminEmail, adminPassword } = req.body;
    const postData = new adminDetailsSchema({
        adminName, adminId, adminEmail, adminPassword, UserPhoto
    })
    let c = await postData.save()
    {
        if (c) {
            return res.status(201).send(c)
        }
    }

})

myRouter.get('/Display', async (req, res) => {
    try {
        const c = await adminDetailsSchema.find()
        res.status(200).send(c)
    } catch (error) {
        res.status(404).send('Error:', error)
    }
})

myRouter.get('/Admin-Profile', async (req, res) => {
    const { adminEmail } = req.params
    try {
        const c = await adminDetailsSchema.find(adminEmail)
        if (c)
            res.status(200).send(c)
        else {
            res.status(404)
        }
    } catch (error) {
        res.status(404).send('Error:', error)
    }
})
myRouter.get('/login', async (req, res) => {
    const { adminEmail, adminPassword } = req.query
    try {
        const admin = await adminDetailsSchema.findOne({ adminEmail })
        if (admin) {
            if (admin.adminPassword === adminPassword) {
                return res.status(200).send('Successfull')
            }
            return res.status(400).json({ message: 'Incorrect Password' })
        }
        return res.status(404).json({ message: 'Email not Found' })

    } catch (error) {
        return res.send("Error", error)
    }
})
module.exports = myRouter