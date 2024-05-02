import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
    stat: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const Stats = mongoose.model('Stats', statsSchema);