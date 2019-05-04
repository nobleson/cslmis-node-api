// External Dependancies
const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
    _id: String,
    tradeName: String,
    tradeDecsription: String,
    tradeSkillLevels: String
    
})

module.exports = mongoose.model('Trade', tradeSchema)