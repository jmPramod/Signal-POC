import mongoose from 'mongoose';

const SignalSchema = new mongoose.Schema({
    signalId: { type: Number },
    signalColor: { type: String},
    description:{type: String},
    img_url:{type: String},
    danger:{type:Boolean,default:false},
    timestamp: { type: Date, default: Date.now },
},{timestamps:true});

export const signalModel = mongoose.model('SignalData', SignalSchema);