const express = require('express');
const app = express();
const port = 3004;

const { QuestionSet } = require('../database/index.js');

app.use('/:listings_id', express.static(__dirname + '/../client/dist'));
// Add in add'l parameter to handle 1-100

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/:listings_id/questions', function(req, res) {
  console.log('req.params =======>', req.params)
  var allUsers = QuestionSet.find({primaryRecord: req.params.listings_id}).exec((err, data) => {
    // IT DOES NOT APPEAR I CAN SORT BY ANYTHING WITHIN THE QUESTIONS ARRAY ('questions.numContributions'), AS IT IS TOO COMPLEX OF AN OBJECT FOR MONGOOSE TO SORT
    // sort by primary record?
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/questions', function(req, res) {
  // req.body.id or something else will be how I transfer the inputted answer
  // then I find the specific item with QuestionSet.find(<some parameter>)
  // I update the answers at that part
  console.log("req.body==========> ", req.body)
  var newQuestion = QuestionSet.findOneAndUpdate({primaryRecord: 0}, {questions: req.body}).exec((err, data) => {
    //Will also need to update the above line
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/questions/answers', function(req, res) {
  var newAnswer = QuestionSet.findOneAndUpdate({primaryRecord: 0}, {questions: [req.body]}).exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})
app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;