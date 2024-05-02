import mongoose from 'mongoose';

const dailyTasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    timeLimit: {
        type: Date,
        required: true
    },
    penalty: {
        type: [String],
        default: []
    },
    reward: {
        type: [String],
        default: []
    },
    status: {
        type: String,
        enum: ['Done', 'In-Progress', 'Abandoned'],
        default: 'In-Progress'
    }
}, { timestamps: true });

export const DailyTasks = mongoose.model('DailyTasks', dailyTasksSchema);