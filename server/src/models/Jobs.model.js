import mongoose from 'mongoose';

const jobsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
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

export const Jobs = mongoose.model('Jobs', jobsSchema);