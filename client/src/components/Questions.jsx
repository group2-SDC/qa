import React from 'react';
import styled from 'styled-components';
import Answers from './Answers.jsx';
import AnswerQuestionBar from './AnswerQuestionBar.jsx';

const Body = styled.div `
  background-color: #f2f2f2;
  font-family: 'Poppins';
  ${Question}:nth-child(1) {
    margin-top: 16px;
  }
`
const QuestionModule = styled.div `
  margin-bottom: 12px;
  background-color: rgb(255, 255, 255);
`
const Question = styled.div `
  padding: 16px 24px 24px 12px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
`

const QuestionHeader = styled.div `
`
const QuestionHeaderInfo = styled.div `
display: block;
`
const AnswerBar = styled.form `
`
const Buttons = styled.div `
  margin-bottom: 12px;
  background-color: rgb(255, 255, 255);
  padding: 16px 24px 24px 12px;
  border: solid #e0e0e0;
  border-top-width: 1px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
`
const Image = styled.img `
height: 42px;
width: 42px;
border-radius: 100%;
float: left;
display: inline-block;
`
const QuestionBody = styled.div `
`
const Ellipsis = styled.i `
  float: right;
`
const UserAndDate = styled.div `
  padding-bottom: 2px;
  font-size: 14px;
  line-height: 18px;
  color: #474747;
`
const LocationContVotes = styled.div `
  font-size: 12px;
  line-height: 16px;
  color: #8c8c8c
`
class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerText: '',
      questionMin: 0,
      questionMax: 5,
      currentPage: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementVote = this.incrementVote.bind(this);
    this.decrementVote = this.decrementVote.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  handleChange(event) {
    console.log('event.target.value: ', event.target.value);
    this.setState({
      answerText: event.target.value
    })
  }
  handleSubmit(index, answerText) {
    // fix with event as parameter?
    event.preventDefault();
    console.log("INDEX: ", index);
    this.props.addAnswer(answerText, index);
    this.reinitializeState();
  }
  incrementVote(questionIndex, ansIndex) {
    this.props.plusOneVote(questionIndex, ansIndex)
  }
  decrementVote(questionIndex, ansIndex) {
    this.props.minusOneVote(questionIndex, ansIndex)
  }
  nextPage() {
    this.setState({
      questionMin: this.state.questionMin + 5,
      questionMax: this.state.questionMax + 5,
      currentPage: this.state.currentPage + 1
    })
  }
  prevPage() {
    this.setState({
      questionMin: this.state.questionMin - 5,
      questionMax: this.state.questionMax - 5,
      currentPage: this.state.currentPage - 1
    })
  }
  reinitializeState() {
    this.setState({
      answerText: ''
    })
  }

  render() {
    return (
        <Body className='questionModule'>
          {this.props.questions.map((question, questionIndex) => {
            if (questionIndex >= this.state.questionMin && questionIndex < this.state.questionMax) return (
              <QuestionModule key={questionIndex} className='question'>
                <Question>
                  <QuestionHeader>
                    <Image src={`${question.profilePic}?t=${Math.random()}`} ></Image>
                    <QuestionHeaderInfo>
                      <Ellipsis className="fas fa-ellipsis-h"></Ellipsis>
                      <UserAndDate>
                        <div><b>{question.username}</b> asked a question {question.date}</div>
                      </UserAndDate>
                      <LocationContVotes>
                        <span>{question.location}</span>
                        {question.numContributions > 0 ? <span>{question.numContributions} contributions</span>: null}
                        {question.numHelpfulVotes > 0 ? <span>{question.numHelpfulVotes} helpful votes</span>: null}
                      </LocationContVotes>
                    </QuestionHeaderInfo>
                  </QuestionHeader>
                  <QuestionBody>
                  <div>{question.question}</div>
                  </QuestionBody>
                  <br></br>
                </Question>
                <Answers answers={question.answers} questionIndex={questionIndex} incrementVote={this.incrementVote} decrementVote={this.decrementVote}/>
                <AnswerQuestionBar questionIndex={questionIndex} handleSubmit={this.handleSubmit}/>
              </QuestionModule>
            )
          })}
          <Buttons>
            {this.state.currentPage > 1 ? <button onClick={this.prevPage}>Previous</button>: null}
            {this.state.currentPage * 5 > this.props.questions.length ? null:<button onClick={this.nextPage}>Next</button>}
          </Buttons>
        </Body>
    )
  }
}

export default Questions;

// ways to fix this issue:
// move lines 85-100 to a new component