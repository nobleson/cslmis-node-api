// External Dependancies
const mongoose = require('mongoose')

const artisanEducationSchema = new mongoose.Schema({
    _id:String,
    schoolName:String,
    yearStart:String,
    yearEnd:String,
    qualificationEarned:String
    
})

module.exports = mongoose.model('ArtisanEducation', artisanEducationSchema)