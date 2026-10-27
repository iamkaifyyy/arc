import mongoose from 'mongoose';

export const workspace = new Workspace Schema({
    path: String,
    name: String,

})

export const Sessions = new mongoose.Schema({
    conversations: [Object],
    workspace: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace'
    }]

})
