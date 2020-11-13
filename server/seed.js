var faker = require('faker');
const mongoose = require('mongoose');
const { Question } = require('../database/index.js');
const { User } = require('../database/index.js');
const { Answer } = require('../database/index.js');

// var randomUserName = faker.name.findName();
// var randomDate = faker.date.past();
// var randomSentence = faker.lorem.sentence();
// var randomProfilePic = faker.image.imageUrl();
// //PERHAPS COME BACK TO CHANGE IMAGES TO IMAGES OF PEOPLE
// //WASN'T SURE IF MONGO DB COULD STORE IMAGES OR JUST URLS
// var randomLocation = faker.address.city() + ', ' + faker.address.country();
// var numContributions = Math.floor(Math.random() * 200);
// var numHelpfulVotes = Math.floor(Math.random() * 50);
// var numLikes = Math.floor(Math.random() * 20);

//For loop, Function that generates data, invoke the function, Another function inserts that data into the database

var createNewData = () => {
  var newQuestion = new Question ({
    date: faker.date.past(),
    question: faker.lorem.sentence()
  });
  newQuestion.save((err) => {
    if (err) {
      console.log('THIS WAS AN ERROR')
    }
  })
  var newUser = new User ({
    username: faker.name.findName(),
    profilePic: faker.image.imageUrl(),
    location: faker.address.city() + ', ' + faker.address.country(),
    numContributions: Math.floor(Math.random() * 200),
    numHelpfulVotes: Math.floor(Math.random() * 50)
  });
  newUser.save((err) => {
    if (err) {
      console.log(err)
    }
  })
  var newAnswer = new Answer ({
    date: faker.date.past(),
    answer: faker.lorem.sentence(),
    likes: Math.floor(Math.random() * 20)
  })
  newAnswer.save((err) => {
    if (err) {
      console.log(err)
    }
  })
}

var generateNRecords = (n) => {
  for (var i = 0; i < n; i++) {
    createNewData();
  }
}

generateNRecords(100);