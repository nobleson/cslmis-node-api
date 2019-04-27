
// External Dependancies
const mongoose = require('mongoose')

const programSchema = new mongoose.Schema({
    centerId: String,
    programName: String,
    year: String,
    description: String,
    dateStarted: String
})

module.exports = mongoose.model('Program', programSchema)