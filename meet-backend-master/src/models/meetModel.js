import mongoose from "mongoose";

const meetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    lat: {
        type: String,
    },
    log: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true  
    },
    duration: {
        type: String,
        required: true
    }
});

const Meet = mongoose.model('meet', meetSchema);
export{Meet};