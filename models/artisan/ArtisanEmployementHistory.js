// External Dependancies
const mongoose = require('mongoose')

const artisanEmployementHistory = new mongoose.Schema({
    
    trade: String,
    yearsPractice: String,
    employmentCompanies: String,
    yearsOfEmployment: String,
    jobRoles: String,
    superviorsPhone_numbers: String,
    currentWorkProject: String,
    siteAddress: String,
    currentEmploymentStatus: String,
    recordDate: String,
    artisanId: String
})

module.exports = mongoose.model('ArtisanEmployementHistory', artisanEmployementHistory)

