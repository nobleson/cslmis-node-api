// External Dependancies
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    _id: String,
    companyName: String,
    companyAcronym: String,
    companyNationality: String,
    companyStatus: String,
    companyWebsite: String,
    companyAddress: String,
    companyTelephone: String,
    companyEmail: String,
    companyNumber: String,
    companyEmail: String,
    companyFounded: String,
    companyActivities: String,
    companyGovernment: String,
    companyState: String,
    dateRegistered: String
    
})

module.exports = mongoose.model('Company', companySchema)