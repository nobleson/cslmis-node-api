
// External Dependancies
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({

    _id: String,
    articleTitle: String,
    content: String,
    publishedDate: String

})

module.exports = mongoose.model('Article', articleSchema)