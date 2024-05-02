import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        default: '???'
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
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
    },
    stats: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stats' }]
    },
    skills: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skills' }]
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jobs'
    },
    achievements: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievements' }]
    },
    dailyTasks: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DailyTasks' }]
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);