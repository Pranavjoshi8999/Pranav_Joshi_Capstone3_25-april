import { Users } from "../models/userModel.js";
import { Meet } from "../models/meetModel.js";
import { MeetStatus } from "../models/meetStatusModel.js";

export const verifiedUser = async (userData) => {
    try {
        let userPhone = await Users.findOne({phone: userData.phone});
        console.log(userPhone);
        if (userPhone) {
            return ({status:'success',data: userPhone});
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const createUser = async (userData) => {
    try {
        let userPhone = await Users.insertMany({
            fname: userData.fname,
            lname: userData.lname,
            phone: userData.phone,
            lat: userData.lat,
            log: userData.log,
        });
        if (userPhone) {
            return ({status:'success',data: userPhone});
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const getUser = async (userData) => {
    try {
        let userPhone = await Users.findOne({
            phone: userData.phone,
        });
        if (userPhone) {
            return ({status:'success',data: userPhone});
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const getAllMeet = async (userData) => {
    try {
        let meetStats = await MeetStatus.find({
            invites: userData.invites
        });
        if (meetStats) {
            return ({status:'success',data: meetStats});
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const createMeet = async (userData) => {
    try {
        let userPhone = await Meet.insertMany({
            title: userData.title,
            description: userData.description,
            lat: userData.lat,
            log: userData.lat,
            date: userData.date,
            time: userData.time,
            duration: userData.duration,
        });
        if (userPhone) {
            return ({status:'success',data: userPhone});
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const createMeetStatus = async (userData) => {
    try {
        let MeetStat = await MeetStatus.insertMany({
            meetId: userData.meetId,
            invites: userData.invites,
            createdBy: userData.createdBy,
            acceptedBy: userData.acceptedBy,
            rejectedBy: userData.rejectedBy,
            pending: userData.pending
        });
        if (MeetStat) {
            return ({status:'success',data: MeetStat});
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const getMeetDetails = async (userData) => {
    try {
        let MeetDetails = await Meet.findOne({
            meetId: userData.id,
        });
        if (MeetDetails) {
            return ({status:'success',data: MeetDetails});
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const getSingleMeet = async (userData) => {
    try {
        let MeetDetails = await MeetStatus.findOne({
            meetId: userData.meetId,
        });
        if (MeetDetails) {
            console.log(MeetDetails)
            return ({status:'success',data: MeetDetails});  
        }
        else {
            return ({status:'error',message:'User Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}
