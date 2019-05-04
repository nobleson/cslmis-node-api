
// External Dependancies
const mongoose = require('mongoose')

const artisanApprentishipSchema = new mongoose.Schema({
    apprentishipPlace:String,
    apprentishipYear:String,
    masterFullName:String,
    masterPhoneNumber:String,
    apprentishipCompletionStatus:String,
    reasonForLeaving:String,
    certificateTestimonial:String,
    reasonForNotIssued:String,
    tradeLearnt:String,
    recordDate:String,
    artisanId: String
})

module.exports = mongoose.model('ArtisanApprentiship', artisanApprentishipSchema)