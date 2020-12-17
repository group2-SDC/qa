require('newrelic');
const express = require('express');
const app = express();
const port = process.env.PORT || 3004;
const bodyParser = require('body-parser');
const compression = require('compression')
// const { QuestionSet } = require('../database/index.js');
const db = require('../database/index2.js')
const morgan = require('morgan');



app.use(compression());

app.use('/', express.static(__dirname + '/../client/dist'));
app.get('/loaderio-d6b055f55277b1bccaf057a65ac0f19a/', (req, res) => {
  res.send('loaderio-d6b055f55277b1bccaf057a65ac0f19a');
});
app.use('/:listings_id', express.static(__dirname + '/../client/dist'));

// Add in add'l parameter to handle 1-100
app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/listings/:listings_id/questions', (req, res) => {
  const id = req.params.listings_id;
  var query = `select * from questions FULL JOIN answers on answers.questionId = questions.id where questions.tripId = ${id}`;
  db.getQuestion(query, (result) => {
    res.send(result);
  })
});

app.post('/questions', (req, res) => {
  const values = [req.body.tripId, `'${req.body.username}'`, `'${req.body.profilepic}'`, `'${req.body.date}'`, `'${req.body.location}'`, req.body.numContributions, req.body.numHelpfulVotes,  `'${req.body.question}'`];
  const query = `insert into questions (tripId, username, profilePic, date, location, numContributions, numHelpfulVotes, question) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
  db.insertIntoDB(query, values, (result) => {
    res.status(201).send('question was posted!');
  })
});

app.post('/questions/answers', function (req, res) {
  const values = [req.body.questionId, `'${req.body.ansUsername}'`, `'${req.body.ansProfilePic}'`, `'${req.body.ansDate}'`, `'${req.body.ansAnswer}'`, req.body.likes];
  const query = `insert into answers (questionId, ansUsername, ansProfilePic, ansDate, ansAnswer, likes) 
  VALUES ($1, $2, $3, $4, $5, $6);`
  db.insertIntoDB(query, values, (result) => {
    res.status(201).send('answer was posted!');
  })
});

app.get('/:listings_id/loaderio-f0d5e9e7ffd10c69f2eba1a2f59b2538/', (req, res) => {
  res.sendFile('/Users/travisbright/qa/server/loaderio-f0d5e9e7ffd10c69f2eba1a2f59b2538.txt');
});

app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;