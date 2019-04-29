
// External Dependancies
const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
    tradeName: String,
    description: String,
    centerId: String
})

module.exports = mongoose.model('Trade', tradeSchema)