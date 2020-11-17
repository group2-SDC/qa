import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Questions from './questions.jsx';
import AskQuestion from './AskQuestion.jsx'


// const Button = styled.button`
//   font-family: sans-serif;
//   /* float: right; */
//   background-color: #000;
//   color: rgb(255, 255, 255);
//   border-color: #000;
//   border-radius: 10%;
//   &:hover {
//     background-color: #424040
//   }
// `

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
    this.answerQuestion = this.answerQuestion.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addToState = this.addToState.bind(this);
  }

  fetchQuestions() {
    axios.get('/questions')
    .then((response) => {
      console.log('response.data[0].questions: ', response.data[0].questions)
      this.setState({
        questions: response.data[0].questions
        // Hard coded to the first primary record, but can change this later...
      })
    }).catch((error) => {
      console.log('THERE WAS AN ERROR: ', error)
    })
  }

  addToState(question) {
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
      this.addQuestion(this.state.questions)
    })
  }

  addQuestion(questionsArray) {
    // WILL NEED TO FIND A WAY TO PASS IN THE CORRECT QUESTION ARRAY WITH THIS 'question' AS A NEW QUESTION THAT HAS BEEN ADDED TO THE FRONT OF THE ARRAY (UNSHIFT?). OR FIND A MONGOOSE METHOD THAT ESSENTIALLY ALLOWS ME TO PUSH THIS OR SAVE IT ONTO THE ARRAY
    axios({
      method: 'post',
      url: '/questions',
      data: questionsArray
    })
  }

  answerQuestion(answer) {
    // WILL NEED TO FIND A WAY TO PASS IN THE CORRECT QUESTION ARRAY WITH THIS 'answer' AS THE ANSWER THAT HAS BEEN ADDED. OR FIND A MONGOOSE METHOD THAT ESSENTIALLY ALLOWS ME TO PUSH THIS OR SAVE IT ONTO THE ARRAY
    axios({
      method: 'post',
      url: '/questions/answers',
      data: {
        username: 'Matthew Crawford',
        // might have to change from Matthew Crawford
        profilePic: 'http://placeimg.com/640/480',
        date: '2020-11-16',
        //Date hardcoded, will need to change
        location: 'Seattle, Washington, United States',
        numContributions: 1,
        numHelpfulVotes: 0,
        question: question,
        answers: [{
          ansUsername: 'Matthew Crawford',
          // might have to change from Matthew Crawford
          ansProfilePic: 'http://placeimg.com/640/480',
          ansDate: '2020-11-16',
          //Date hardcoded, will need to change
          ansAnswer: answer,
          likes: 0
        }]
      }
    })
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    return (
      <Main className="parent">
        <AskQuestion questions={this.state.questions} addToState={this.addToState}/>
        <Questions questions={this.state.questions} />
      </Main>
    )
  }

}

export default App;