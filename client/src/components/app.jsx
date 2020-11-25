import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Questions from './Questions.jsx';
import AskQuestion from './AskQuestion.jsx';

const Main = styled.div `
  background-color: #f2f2f2;
  font-family: 'Poppins';
  font-weight: 200;
`

const WholeModule = styled.div `
  padding: 12px;
  width: 66.6666677%;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      pathname: window.location.pathname.slice(1, window.location.pathname.length -1)
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
    console.log('window in state: ', this.state.pathname)
    console.log('window.location.pathname: ', window.location.pathname)
    //Just want the listing ID, store as a variable in state? To pass in to all requests
    axios.get('api/listings/' + this.state.pathname + '/questions/')
    .then((response) => {
      this.setState({
        questions: response.data[0].questions
      })
    }).catch((error) => {
      console.log('THERE WAS AN ERROR: ')
    })
  }
  addQuestion(question) {
    var currentState = this.state.questions.slice();
    console.log('currentState: ', currentState);
    var newQuestion = {
      username: 'Matthew Crawford',
      // might have to change from Matthew Crawford
      profilePic: 'https://picsum.photos/id/100/200',
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
      ansProfilePic: 'https://picsum.photos/id/100/200',
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
        <WholeModule>
          <AskQuestion questions={this.state.questions} addQuestion={this.addQuestion}/>
          <Questions questions={this.state.questions} addAnswer={this.addAnswer}  plusOneVote={this.plusOneVote} minusOneVote={this.minusOneVote}/>
        </WholeModule>
      </Main>
    )
  }

}

export default App;