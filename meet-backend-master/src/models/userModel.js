import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    lat: {
        type: String
    },
    log: {
        type: String
    }
});

const Users = mongoose.model('users', userSchema);
export{Users};