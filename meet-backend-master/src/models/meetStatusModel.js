import mongoose from "mongoose";

const meetStatusSchema = new mongoose.Schema({
    meetId: {
        type: String,
        required: true,
    },
    invites: {
        type: [String],
    },
    
    createdBy: {
        type: String,
        required: true,
    },
    acceptedBy: {
        type: [String],
         
    },
    rejectedBy: {
        type: [String],
       
    },
    pending: {
        type: [String],
        
    }
});

const MeetStatus = mongoose.model('meetStatus', meetStatusSchema);
export{MeetStatus};