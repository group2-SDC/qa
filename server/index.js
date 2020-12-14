const express = require('express');
const app = express();
const port = 3004;
const compression = require('compression')
// const { QuestionSet } = require('../database/index.js');
const db = require('../database/index2.js')


app.use(compression());

app.use('/:listings_id', express.static(__dirname + '/../client/dist'));
// Add in add'l parameter to handle 1-100

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/listings/:listings_id/questions', (req, res) => {
  const id = req.params.listings_id; 
  var query = `select * from questions FULL JOIN answers on answers.questionId = questions.id where questions.tripId = ${id}`;
  db.getAllQuestionsWithTripId(query, (result) => {
    res.send(result);
  })
});


app.post('/questions', function (req, res) {
  // req.body.id or something else will be how I transfer the inputted answer
  // then I find the specific item with QuestionSet.find(<some parameter>)
  // I update the answers at that part
  var newQuestion = QuestionSet.findOneAndUpdate({ primaryRecord: 0 }, { questions: req.body }).exec((err, data) => {
    //Will also need to update the above line
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/questions/answers', function (req, res) {
  var newAnswer = QuestionSet.findOneAndUpdate({ primaryRecord: 0 }, { questions: [req.body] }).exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})
app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;