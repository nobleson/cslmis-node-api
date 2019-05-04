// External Dependancies
const mongoose = require('mongoose')

const artisanSchema = new mongoose.Schema({
    centerId: String,
    fullLegalName: String,
    acronym: String,
    nationality: String,
    legalLatatus: String,
    officialAddress: String,
    postalAddress: String,
    telephone: String,
    email: String,
    website: String,
    contactPersonsNumber: String,
    contactPersonsEmail: String,
    dateFounded: String,
    primaryCtivities: {
        type: Map,
        of: String
      },
    noPermanentTrainer: String,
    noAdjunctTrainers: String,
    noAdminStaff: String,
    localGovernment: String,
    state: String
})

module.exports = mongoose.model('Artisan', artisanSchema)