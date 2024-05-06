import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    }
},
{timestamps: true})

export const StudentModel = mongoose.model('Student', StudentSchema);