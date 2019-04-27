
// External Dependancies
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    _id: String,
    courseId: String,
    courseTitle: String,
    courseCode: String,
    courseUnit: String
})

module.exports = mongoose.model('Course', courseSchema)