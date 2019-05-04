// External Dependancies
const mongoose = require('mongoose')

const jobApplicationSchema = new mongoose.Schema({

    _id: String,
    jobAdvertId: String,
    companyId: String,
    artisanId: String,
    dateApplied: String

})

module.exports = mongoose.model('JobApplication', jobApplicationSchema)