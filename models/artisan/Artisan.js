// External Dependancies
const mongoose = require('mongoose')

const centerSchema = new mongoose.Schema({
    _id: String,
    surname: String,
    middleName: String,
    otherName: String,
    dateOfBirth: String,
    gender: String,
    placeOfBirth: String,
    permanentAddress: String,
    phoneNumber: String,
    emailAddress: String,
    state_origin: String,
    local_government: String,
    nationality: String,

})

module.exports = mongoose.model('Center', centerSchema)