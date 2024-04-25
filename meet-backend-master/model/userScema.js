import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    phoneNumber: String,
    otp: String
});

const OtpModel = mongoose.model("Otp", otpSchema);
export {OtpModel};