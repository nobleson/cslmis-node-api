// External Dependancies
const mongoose = require('mongoose')

const artisanCertificateSchema = new mongoose.Schema({
    
    certificateTitle: String,
    certificate: String,
    awardingBody: String,
    yearIssued: String,
    recordDate: String,
    artisanId: String
    
})

module.exports = mongoose.model('ArtisanCertificate', artisanCertificateSchema)