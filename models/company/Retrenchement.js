// External Dependancies
const mongoose = require('mongoose')

const retrenchementSchema = new mongoose.Schema({

    totalRetrenced: String,
    totalCertified: String,
    totalLicensed: String,
    year: String,
    month: String,
    companyId: String

})

module.exports = mongoose.model('Retrenchement', retrenchementSchema)