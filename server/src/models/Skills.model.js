import mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
    experience: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export const Skills = mongoose.model('Skills', skillsSchema);