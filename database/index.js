const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  userUnifiedTopology: true
})

let questionSchema = mongoose.Schema({
  primaryRecord: Number,
  questions: [
    {
      username: String,
      profilePic: String,
      date: Date,
      location: String,
      numContributions: Number,
      numHelpfulVotes: Number,
      question: String,
      answers: [
        {
          ansUsername: String,
          ansProfilePic: String,
          ansDate: Date,
          ansAnswer: String
        }
      ]
    }
  ]
})

let QuestionSet = mongoose.model('Question', questionSchema);

let save = (document) => {
  document.save((err, data) => {
    if (err) {
      console.log("ERROR: ", err)
    }
  })
}

exports.QuestionSet = QuestionSet;
exports.save = save;
// exports.User = User;
// exports.Answer = Answer;