import express from 'express';
import {  createMeetHandler, createMeetStatusHandler, createUserHandler, getMeetDetailsHandler, getMeetHandler, getSingleMeetHandler, getUserHandler, verifyUserHandler } from './src/controller/userControllers.js';

const router = express.Router();
//Signup and login
router.post('/verifyUser', verifyUserHandler);

// User creation 
router.post('/createUser', createUserHandler);
router.post('/getSingleUSer', getUserHandler);

// meeting details 
router.post('/createMeet', createMeetHandler);
router.post('/getAllMeet', getMeetHandler);
router.post('/createMeetStatus', createMeetStatusHandler);
router.post('/meetDetails', getMeetDetailsHandler);
router.post('/getSingleMeeting', getSingleMeetHandler);

export {router as routes};