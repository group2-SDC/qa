const express = require('express');
const app = express();
const port = 3000;

const { QuestionSet } = require('../database/index.js');
const { User } = require('../database/index.js');
const { Answer } = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/users', function(req, res) {
  var allUsers = User.find().exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/questions', function(req, res) {
  var allUsers = QuestionSet.find().exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/answers', function(req, res) {
  var allUsers = Answer.find().exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => console.log(`listening on port ${port}`))