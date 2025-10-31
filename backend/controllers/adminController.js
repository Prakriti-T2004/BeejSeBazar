import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import LabSciModel from "../models/LabSciModel.js"
import jwt from "jsonwebtoken"

// API for adding doctor
const addLabSci = async (req, res) => {

    try {
        //console.log('req.file:', req.file);
        console.log("Received body:", req.body);
        const { name, email, password, speciality, Certified, experience, about, fees, address } = req.body
        const imageFile = req.file
        

        /*edited */
        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Image file is missing" });
        }

        // checking for all data to add LabSci
        /*if (!name || !email || !password || !speciality || typeof Certified !== 'boolean' || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "MissingDetails" })
        }*/

        if (!req.body.name) {
            return res.status(400).json({ success: false, message: 'Missing code' });
        }
        if (!req.body.fees) {
            return res.status(400).json({ success: false, message: 'Missing fees' });
        }
        if (!req.body.address) {
            return res.status(400).json({ success: false, message: 'Incomplete address' });
        }
        if (!req.body.speciality) {
            return res.status(400).json({ success: false, message: 'Missing speciality' });
        }
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Image file is missing' });
        }
        if (!req.body.about) {
            return res.status(400).json({ success: false, message: 'Missing about section' });
        }

        if (!req.body.email) {
            return res.status(400).json({ success: false, message: 'Missing email' });
        }

        if (!req.body.experience) {
            return res.status(400).json({ success: false, message: 'Missing experience' });
        }

        // Convert Certified to Boolean if it's a string
        let certifiedValue = req.body.Certified;
        if (typeof certifiedValue === 'string') {
            certifiedValue = ['true', 'yes', '1'].includes(certifiedValue.toLowerCase());
        }

        // Validate Certified
        if (typeof certifiedValue !== 'boolean') {
            return res.status(400).json({ success: false, message: 'Invalid Certified value' });
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        //hashing LabSci Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const LabSciData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            Certified,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newLabSci = new LabSciModel(LabSciData)
        await newLabSci.save()

        res.json({ success: true, message: "LabSci Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API for admin Login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addLabSci, loginAdmin }