var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  gameId: String,
  ends: String,
  status: String,
  settings: Object,
  questions: Object,
  player1: Object,
  player2: Object,
  created_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Game', GameSchema);
