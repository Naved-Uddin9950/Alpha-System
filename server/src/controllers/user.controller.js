import { User } from '../models/User.model.js';

const userController = {
    async createUser(req, res) {
        try {
            const { fullname, username, password } = req.body;

            // Check if the username already exists in the database
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                // If username exists, return an error response
                return res.status(400).json({ error: 'Username already exists. Please choose a different one.' });
            }

            // If username is unique, proceed with creating the new user
            const newUser = new User({
                fullname,
                username,
                password
            });

            await newUser.save();

            // Send a success response
            res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            // If there's an error, send an error response
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'An error occurred while creating the user' });
        }
    }
};

export default userController;
