var faker = require('faker');
const mongoose = require('mongoose');
const { QuestionSet } = require('../database/index.js');
const { save } = require('../database/index.js');
const axios = require('axios')

//To return all from these collections on command line
  //db.users.find() or db.questions.find() or db.answers.find()
//When you're working on a branch and ready to push, do...
//"git push origin" and then the branch name
//Also think of it like git push <place i am pushing to> <thing i am pushing>
// for a git pull
  // switch back to main branch on github
  // run git pull origin main from vs code (recommended by Joel- this will pull the main from github down to my local repo)
  // OR (also recommended by Joel) just switch to branch main and run git merge <branch name>

// var validImagesArray = []
// var getValidImages = () => {
//   axios.get('https://picsum.photos/v2/list?page=1&limit=100')
//   .then((response) => {
//     for (var i = 0; i < response.length; i++) {
//       validImagesArray.push(response[i].url)
//     }
//   }).catch((error) => {
//     console.log('THERE WAS AN ERROR: ')
//   })
// }
// getValidImages();

var getRandomPic = () => {
  var randomInt = Math.floor(Math.random() * (309-117) + 117)
  var nonExistIds = [138, 148, 150, 205, 207, 224, 226, 245, 246, 262, 285, 286, 298, 303]
  //The above IDs don't exist on picSum
  if (nonExistIds.indexOf(randomInt) > -1) {
    randomInt += 3;
    return 'https://picsum.photos/id/' + randomInt + '/200';
    // axios.get('https://picsum.photos/id/' + randomInt + '/200')
    // .then((response) => {
    //   console.log('response.headers: ', response.headers)
    //   // return response.headers.location
    // })
    // .catch((error) => {
    //   console.log('ERROR WITH SEED GET REQUEST')
    // })
    // Plus 3 will guarantee no duplication
  } else {
    return 'https://picsum.photos/id/' + randomInt + '/200';
    // axios.get('https://picsum.photos/id/' + randomInt + '/200')
    // .then((response) => {
    //   console.log('response.headers: ', response.headers)
    //   // return response.headers.location
    // })
    // .catch((error) => {
    //   console.log('ERROR WITH SEED GET REQUEST')
    // })
  }
}
var createNewData = (index) => {
  var randomNumQuestions = Math.floor(Math.random() * 50) + 5;
  // Changed the above value of Math.random to limit the number of questions to make postman parsing easier
  var questionsArray = [];
  var answersArray = []
  let prevQuesDate;
  for (var i = 0; i < randomNumQuestions; i++) {
    if (prevQuesDate === undefined) {
      var question = {
          username: faker.name.findName(),
          profilePic: getRandomPic(),
          // USE THE V2 LIST TO GET VALID PHOTOS THEN PICK FROM THERE
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
          profilePic: getRandomPic(),
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
          ansProfilePic: getRandomPic(),
          ansDate: faker.date.between(minDate, '2020-11-15'),
          ansAnswer: faker.lorem.sentence(),
          likes: randomNumLikes
        };
      } else {
        var answer = {
          ansUsername: faker.name.findName(),
          ansProfilePic: getRandomPic(),
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
  for (var i = 1; i <= n; i++) {
    createNewData(i)
  }
}

generateNRecords(100);

module.exports = {
  createNewData,
  generateNRecords
}

exports.createNewData = createNewData;
exports.generateNRecords = generateNRecords;