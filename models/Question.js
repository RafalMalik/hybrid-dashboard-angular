var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  content: String,
  a: String,
  b: String,
  c: String,
  d: String,
  t: String,
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', QuestionSchema);
