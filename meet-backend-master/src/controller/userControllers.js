import { createMeet, createMeetStatus, createUser, getAllMeet, getMeetDetails, getSingleMeet, getUser, verifiedUser } from "../services/userServices.js";

export const verifyUserHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let verifyUser = await verifiedUser(userData);
        if(verifyUser){
            res.send({message: 'user fetched successfully', data: verifyUser}); 
            console.log(verifyUser);
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}

export const createUserHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let verifyUser = await createUser(userData);
        if(verifyUser){
            res.send({message: 'user created successfully', data: verifyUser}); 
            console.log(verifyUser);
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}
export const getUserHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let verifyUser = await getUser(userData);
        if(verifyUser){
            res.send({message: 'user created successfully', data: verifyUser}); 
            console.log(verifyUser);
        }
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}

export const getMeetHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let verifyUser = await getAllMeet(userData);
        if(verifyUser){
            res.send({message: 'user created successfully', data: verifyUser}); 
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}

export const createMeetHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let createdMeet = await createMeet(userData);
        if(createdMeet){
            res.send({message: 'user created successfully', data: createdMeet}); 
            console.log(createdMeet);
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}

export const createMeetStatusHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let createdMeetStatus = await createMeetStatus(userData);
        if(createdMeetStatus){
            res.send({message: 'user created successfully', data: createdMeetStatus}); 
            console.log(createdMeetStatus);
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}
export const getMeetDetailsHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let meetDetails = await getMeetDetails(userData);
        if(meetDetails){
            res.send({message: 'user created successfully', data: meetDetails}); 
            console.log(meetDetails);
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}

export const getSingleMeetHandler = async(req,res) => {
    let userData = req.body;
    try {
        let meetDetails = await getSingleMeet(userData);
        if(meetDetails){
            res.send({message: 'user created successfully', data: meetDetails}); 
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}