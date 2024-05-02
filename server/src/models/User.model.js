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
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stats' }],
        default: []
    },
    skills: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skills' }],
        default: []
    },
    jobs: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Jobs'}],
        default: []
    },
    achievements: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievements' }],
        default: []
    },
    dailyTasks: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DailyTasks' }],
        default: []
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);