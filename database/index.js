const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fetcher')

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
          username: String,
          profilePic: String,
          date: Date,
          answer: String
        }
      ]
    }
  ]
})

// let questionSchema = mongoose.Schema({
//   date: Date,
//   question: String
// });

// let usersSchema = mongoose.Schema({
//   username: String,
//   profilePic: String,
//   location: String,
//   numContributions: Number,
//   numHelpfulVotes: Number
// });

// let answersSchema = mongoose.Schema({
//   date: Date,
//   answer: String,
//   likes: Number
// })

let QuestionSet = mongoose.model('Question', questionSchema);

let save = (document) => {
  var document = new QuestionSet(document);
  document.save((err) => {
    if (err) {
      console.log('ERROR WITH SAVING: ', err)
    }
  })
}

// let User = mongoose.model('User', usersSchema);

// let Answer = mongoose.model('Answer', answersSchema);

exports.QuestionSet = QuestionSet;
// exports.save = save;
// exports.User = User;
// exports.Answer = Answer;