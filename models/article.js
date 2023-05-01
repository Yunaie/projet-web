const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  markdown : {
    type : String,
    required : true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  crime: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crime'
  }
})

module.exports = mongoose.model('Article', articleSchema)
