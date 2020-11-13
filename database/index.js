const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fetcher')

let questionSchema = mongoose.Schema({
  date: Date,
  question: String
});

let usersSchema = mongoose.Schema({
  username: String,
  profilePic: String,
  location: String,
  numContributions: Number,
  numHelpfulVotes: Number
});

let answersSchema = mongoose.Schema({
  date: Date,
  answer: String,
  likes: Number
})

let Question = mongoose.model('Question', questionSchema);

let User = mongoose.model('User', usersSchema);

let Answer = mongoose.model('Answer', answersSchema);

exports.Question = Question;
exports.User = User;
exports.Answer = Answer;