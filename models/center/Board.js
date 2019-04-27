
// External Dependancies
const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    boardFullName: String,
    position: String,
    centerId: String
})

module.exports = mongoose.model('Board', boardSchema)