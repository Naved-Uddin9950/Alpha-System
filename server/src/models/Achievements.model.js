import mongoose from 'mongoose';

const achievementsSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    requirements: {
        type: [String],
        default: [],
        required: true
    },
    reward: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        enum: ['Done', 'In-Progress', 'Locked'],
        default: 'Locked'
    }
}, { timestamps: true });

export const Achievements = mongoose.model('Achievements', achievementsSchema);