
// External Dependancies
const mongoose = require('mongoose')

const artisanApprentishipSchema = new mongoose.Schema({
    _id: String,
    apprentishipPlace:String,
    apprentishipYear:String,
    masterFullName:String,
    masterPhoneNumber:String,
    apprentishipCompletionStatus:String,
    reasonForLeaving:String,
    certificateTestimonial:String,
    reasonForNotIssued:String,
    tradeLearnt:String,
    recordDate:String
})

module.exports = mongoose.model('ArtisanApprentiship', artisanApprentishipSchema)