
// External Dependancies
const mongoose = require('mongoose')

const strenghtSchema = new mongoose.Schema({
    name: String,
    description: String,
    centerId: String
})

module.exports = mongoose.model('Strength', strenghtSchema)