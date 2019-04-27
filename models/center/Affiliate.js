// External Dependancies
const mongoose = require('mongoose')

const affiliateSchema = new mongoose.Schema({
    organizationName: String,
    location: String,
    affiliatedYear: String, 
    centerId: String
})

module.exports = mongoose.model('Affiliate', affiliateSchema)