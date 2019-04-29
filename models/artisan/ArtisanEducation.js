// External Dependancies
const mongoose = require('mongoose')

const artisanEducationSchema = new mongoose.Schema({
    
    schoolName:String,
    yearStart:String,
    yearEnd:String,
    qualificationEarned:String,
    artisanId: String
    
})

module.exports = mongoose.model('ArtisanEducation', artisanEducationSchema)