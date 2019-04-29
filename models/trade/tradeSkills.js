
// External Dependancies
const mongoose = require('mongoose')

const tradeSkillsSchema = new mongoose.Schema({
    
    tradeSkill: String,
    skillDescription: String,
    levelName: String,
    tradeId: String
    
})

module.exports = mongoose.model('TradeSkills', tradeSkillsSchema)