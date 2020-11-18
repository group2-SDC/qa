import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Questions from './questions.jsx';
import AskQuestion from './AskQuestion.jsx';

const Main = styled.div `
  background-color: #f2f2f2;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
    this.fetchQuestions = this.fetchQuestions.bind(this);
    // this.answerQuestion = this.answerQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.plusOneVote = this.plusOneVote.bind(this);
    this.minusOneVote = this.minusOneVote.bind(this);
  }

  fetchQuestions() {
    axios.get('/questions')
    .then((response) => {
      this.setState({
        questions: response.data[0].questions
        // Hard coded to the first primary record, but can change this later...
      })
    }).catch((error) => {
      console.log('THERE WAS AN ERROR: ', error)
    })
  }
  addQuestion(question) {
    var currentState = this.state.questions.slice();
    console.log('currentState: ', currentState);
    var newQuestion = {
      username: 'Matthew Crawford',
      // might have to change from Matthew Crawford
      profilePic: 'http://placeimg.com/640/480',
      date: '2020-11-16',
      //Date hardcoded, will need to change
      location: 'Seattle, Washington, United States',
      numContributions: 1,
      numHelpfulVotes: 0,
      question: question,
      answers: []
    }
    currentState.unshift(newQuestion);
    console.log('currentState after unshift: ', currentState)
    this.setState({
      questions: currentState
    }, () => {
      console.log("new state after set state: ", this.state.questions)
      this.updateQuestion(this.state.questions)
    })
  }
  addAnswer(answer, index) {
    var currentState = this.state.questions.slice();
    var newAnswer = {
      ansUsername: 'Matthew Crawford',
      // might have to change from Matthew Crawford
      ansProfilePic: 'http://placeimg.com/640/480',
      ansDate: '2020-11-16',
      //Date hardcoded, will need to change
      ansAnswer: answer,
      likes: 0
    }
    currentState[index].answers.push(newAnswer)
    console.log('currentState: ', currentState[index].answers)
    this.setState({
      questions: currentState
    }, () => {
      console.log("new state after set state: ", this.state.questions)
      this.updateQuestion(this.state.questions)
    })
  }
  updateQuestion(questionsArray) {
    axios({
      method: 'post',
      url: '/questions',
      data: questionsArray
    })
  }
  plusOneVote(questionIndex, ansIndex) {
    var currentState = this.state.questions.slice();
    currentState[questionIndex].answers[ansIndex].likes += 1;
    this.setState({
      questions: currentState
    }, () => {
      this.updateQuestion(this.state.questions)
    })
  }
  minusOneVote(questionIndex, ansIndex) {
    var currentState = this.state.questions.slice();
    currentState[questionIndex].answers[ansIndex].likes -= 1;
    this.setState({
      questions: currentState
    }, () => {
      this.updateQuestion(this.state.questions)
    })
  }
  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    return (
      <Main className="parent">
        <AskQuestion questions={this.state.questions} addQuestion={this.addQuestion}/>
        <Questions questions={this.state.questions} addAnswer={this.addAnswer}  plusOneVote={this.plusOneVote} minusOneVote={this.minusOneVote}/>
      </Main>
    )
  }

}

export default App;