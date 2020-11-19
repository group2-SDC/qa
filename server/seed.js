var faker = require('faker');
const mongoose = require('mongoose');
const { QuestionSet } = require('../database/index.js');
const { save } = require('../database/index.js');

//To return all from these collections on command line
  //db.users.find() or db.questions.find() or db.answers.find()
//When you're working on a branch and ready to push, do...
//"git push origin" and then the branch name
//Also think of it like git push <place i am pushing to> <thing i am pushing>
// for a git pull
  // switch back to main branch on github
  // run git pull origin main from vs code (recommended by Joel- this will pull the main from github down to my local repo)
  // OR (also recommended by Joel) just switch to branch main and run git merge <branch name>

var createNewData = (index) => {
  var randomNumQuestions = Math.floor(Math.random() * 50) + 5;
  var questionsArray = [];
  var answersArray = []
  let prevQuesDate;
  for (var i = 0; i < randomNumQuestions; i++) {
    if (prevQuesDate === undefined) {
      var question = {
          username: faker.name.findName(),
          profilePic: faker.image.animals(400, 400) + Math.random(),
          date: faker.date.past(),
          location: faker.address.city() + ', ' + faker.address.country(),
          numContributions: Math.floor(Math.random() * 200),
          numHelpfulVotes: Math.floor(Math.random() * 20),
          question: faker.lorem.sentence(),
          answer: []
      }
    } else {
      var question = {
          username: faker.name.findName(),
          profilePic: faker.image.animals(400, 400) + Math.random(),
          date: faker.date.past(0.2, prevQuesDate),
          location: faker.address.city() + ', ' + faker.address.country(),
          numContributions: Math.floor(Math.random() * 200),
          numHelpfulVotes: Math.floor(Math.random() * 20),
          question: faker.lorem.sentence(),
          answer: []
      }
    }
    questionsArray.push(question);
    prevQuesDate = question.date;
  }
  // console.log('questionsArray[0].answer: ', questionsArray[0].answer)
  var newQuestionSet = new QuestionSet ({
    primaryRecord: index,
    questions: questionsArray
  })

  for (let j = 0; j < newQuestionSet.questions.length; j++) {
    var randomNumAnswers = Math.floor(Math.random() * 5);
    var minDate = newQuestionSet.questions[j].date;
    let prevAnsDate;
    var likesCeiling = 8;
    for (let k = 0; k < randomNumAnswers; k++) {
      var randomNumLikes = Math.floor(Math.random() * likesCeiling)
      likesCeiling = randomNumLikes;
      if (prevAnsDate === undefined) {
        var answer = {
          ansUsername: faker.name.findName(),
          ansProfilePic: faker.image.animals(400, 400) + Math.random(),
          ansDate: faker.date.between(minDate, '2020-11-15'),
          ansAnswer: faker.lorem.sentence(),
          likes: randomNumLikes
        };
      } else {
        var answer = {
          ansUsername: faker.name.findName(),
          ansProfilePic: faker.image.animals(400, 400) + Math.random(),
          ansDate: faker.date.between(prevAnsDate, '2020-11-15'),
          ansAnswer: faker.lorem.sentence(),
          likes: randomNumLikes
        };
      }
      newQuestionSet.questions[j].answers.push(answer);
      prevAnsDate = answer.ansDate;
    }
  }
  save(newQuestionSet);
}

var generateNRecords = (n) => {
  for (var i = 0; i < n; i++) {
    console.log("primary record ========>", i)
    createNewData(i)
  }
}

generateNRecords(3);
//will need to update to 100

module.exports = {
  createNewData,
  generateNRecords
}

exports.createNewData = createNewData;
exports.generateNRecords = generateNRecords;