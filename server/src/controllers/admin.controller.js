import { Admin } from '../models/Admin.model.js';

const adminController = {
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
    }
};

export default adminController;
