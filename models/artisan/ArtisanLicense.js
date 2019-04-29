// External Dependancies
const mongoose = require('mongoose')

const artisanLicenseSchema = new mongoose.Schema({
    
    licenseTitle: String,
    license: String,
    awardingBody: String,
    yearIssue: String,
    recordDate: String,
    artisanId: String
    
})

module.exports = mongoose.model('ArtisanLicense', artisanLicenseSchema)