import { Admin } from '../models/Admin.model.js';

const adminController = {
    // Create new admin
    async createUser(req, res) {
        try {
            const { username, password } = req.body;

            // Check if the username already exists in the database
            const existingAdmin = await Admin.findOne({ username });
            if (existingAdmin) {
                // If username exists, return an error response
                return res.status(400).json({ error: 'Username already exists. Please choose a different one.' });
            }

            // If username is unique, proceed with creating the new user
            const newAdmin = new Admin({
                username,
                password
            });

            await newAdmin.save();

            // Send a success response
            res.status(201).json({ message: 'User created successfully', admin: newAdmin });
        } catch (error) {
            // If there's an error, send an error response
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'An error occurred while creating the admin' });
        }
    },

    // Get admin info
    async getAdminInfo(req, res) {
        try {
            const { username, password } = req.body;

            // Query the database for admin info based on username and password
            const adminInfo = await Admin.findOne({ username, password });

            if (adminInfo) {
                // If admin info is found, return it as JSON response
                res.status(200).json(adminInfo);
            } else {
                // If admin info is not found, return a 404 Not Found response
                res.status(404).json({ error: 'Admin not found' });
            }
        } catch (error) {
            // If there's an error, send an error response
            console.error('Error fetching admin info:', error);
            res.status(500).json({ error: 'An error occurred while fetching admin info' });
        }
    }
};

export default adminController;
