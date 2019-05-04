// External Dependancies
const mongoose = require('mongoose')

const jobAdventSchema = new mongoose.Schema({
    _id: String,
    jobTitle: String,
    jobDescription: String,
    jobRequirements: String,
    adstartDate: String,
    deadlineDate: String,
    jobStatus: String,
    jobLocation: String,
    subscriptionId: String,
    jobQualification: String,
    companyId: String

    
})

module.exports = mongoose.model('JobAdvent', jobAdventSchema)