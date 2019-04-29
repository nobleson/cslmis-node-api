// External Dependancies
const mongoose = require('mongoose')

const facilitySchema = new mongoose.Schema({
    noClassRomms: String,
    masonaryFacility: String,
    capentryFacility: String,
    otherFacility: String,
    surveyEquipment: String,
    centerId: String
})

module.exports = mongoose.model('Facility', facilitySchema)