// External Dependancies
const mongoose = require('mongoose')

const artisanCenterSchema = new mongoose.Schema({
_id: String,
centerName: String,
centerNumber: String,
candidateNumber:String,
candidateTrade: String,

})

module.exports = mongoose.model('ArtisanCenter', artisanCenterSchema)