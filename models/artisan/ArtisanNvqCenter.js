// External Dependancies
const mongoose = require('mongoose')

const artisanNvqCenterSchema = new mongoose.Schema({

centerName: String,
centerNumber: String,
candidateNumber:String,
candidateTrade: String,
artisanId: String

})

module.exports = mongoose.model('ArtisanNvqCenter', artisanNvqCenterSchema)