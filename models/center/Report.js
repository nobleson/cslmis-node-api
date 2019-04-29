// External Dependancies
const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    reportTitle: String,
    description: String,
    document: String,
    date: String,
    centerId: String
})

module.exports = mongoose.model('Report', reportSchema)