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

var createNewData = (i) => {
  var randomNumQuestions = Math.floor(Math.random() * 10) + 1;
  var questionsArray = [];
  var answersArray = []
  for (var i = 0; i < randomNumQuestions; i++) {
    var question = {
        username: faker.name.findName(),
        profilePic: faker.image.imageUrl(),
        date: faker.date.past(),
        location: faker.address.city() + ', ' + faker.address.country(),
        numContributions: Math.floor(Math.random() * 200),
        numHelpfulVotes: Math.floor(Math.random() * 50),
        question: faker.lorem.sentence(),
        answer: []
    }
    questionsArray.push(question)
  }
  // console.log('questionsArray[0].answer: ', questionsArray[0].answer)
  var newQuestionSet = new QuestionSet ({
    primaryRecord: i,
    questions: questionsArray
  })

  console.log('newQuestionSet.questions=======>', newQuestionSet.questions)
  for (let j = 0; j < newQuestionSet.questions.length; j++) {
    var randomNumAnswers = Math.floor(Math.random() * 3) + 1;
    for (let k = 0; k < randomNumAnswers; k++) {
      var answer = {
        ansUsername: faker.name.findName(),
        ansProfilePic: faker.image.imageUrl(),
        ansDate: faker.date.past(),
        ansAnswer: faker.lorem.sentence()
      };
      newQuestionSet.questions[j].answers.push(answer);
    }
  }
  console.log('new question set=====>', newQuestionSet.questions)

  save(newQuestionSet);
}

var generateNRecords = (n) => {
  for (var i = 0; i < n; i++) {
    console.log("i ========>", i)
    createNewData(i)
  }
}

generateNRecords(3);
//will need to update to 100
