var faker = require('faker');
const mongoose = require('mongoose');
const { QuestionSet } = require('../database/index.js');
// const { save } = require('../database/index.js');

//To return all from these collections on command line
  //db.users.find() or db.questions.find() or db.answers.find()
//When you're working on a branch and ready to push, do...
//"git push origin" and then the branch name
//Also think of it like git push <place i am pushing to> <thing i am pushing>
//git pull combines branches

var createNewData = (i) => {
  var randomNumQuestions = Math.floor(Math.random() * 20)
  var randomNumAnswers = Math.floor(Math.random() * 4)
  console.log('i inside of createNewData: ', i)
  var newQuestionSet = new QuestionSet ({
    primaryRecord: i,
    questions: [
      {
        username: faker.name.findName(),
        profilePic: faker.image.imageUrl(),
        date: faker.date.past(),
        location: faker.address.city() + ', ' + faker.address.country(),
        numContributions: Math.floor(Math.random() * 200),
        numHelpfulVotes: Math.floor(Math.random() * 50),
        question: faker.lorem.sentence(),
        answers: [
          {
            username: faker.name.findName(),
            profilePic: faker.image.imageUrl(),
            date: faker.date.past(),
            answer: faker.lorem.sentence()
          }
        ]
      }
    ]
  })
  newQuestionSet.save((err) => {
    if (err) {
      console.log("Err: ", err)
    }
  })
}
//it seems like the saving of new question sets is running asynchronously, is this a problem? AKA primary records are getting generated out of order

var generateNRecords = (n) => {
  for (var i = 0; i < n; i++) {
    console.log("i ========>", i)
    createNewData(i)
  }
}

generateNRecords(100);

// var createNewData = () => {
//   var newQuestion = new Question ({
//     date: faker.date.past(),
//     question: faker.lorem.sentence()
//   });
//   newQuestion.save((err) => {
//     if (err) {
//       console.log('THIS WAS AN ERROR: ', err)
//     }
//   })
//   var newUser = new User ({
//     username: faker.name.findName(),
//     profilePic: faker.image.imageUrl(),
//     location: faker.address.city() + ', ' + faker.address.country(),
//     numContributions: Math.floor(Math.random() * 200),
//     numHelpfulVotes: Math.floor(Math.random() * 50)
//   });
//   newUser.save((err) => {
//     if (err) {
//       console.log('THIS WAS AN ERROR: ', err)
//     }
//   })
//   var newAnswer = new Answer ({
//     date: faker.date.past(),
//     answer: faker.lorem.sentence(),
//     likes: Math.floor(Math.random() * 20)
//   })
//   newAnswer.save((err) => {
//     if (err) {
//       console.log('THIS WAS AN ERROR: ', err)
//     }
//   })
// }


// [
//   primary record/location: 0-99 (for loop),
//   questions (random number between 0 and 20?): [
//     {
//       username: random
//       date: random
//       location: random
//       profilePic: random
//       question: text (random)
//       answers (random number betw 0 and 4?): [
//         {
//           username: random
//           profilePic: random
//           date: random
//           answer: text (random)
//         }
//         {
//           ...
//         }
//       ]
//     }
//     {
//       ...(this is another question, perhaps with answers)
//     }
//   ]
// ]