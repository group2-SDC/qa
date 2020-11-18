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
`
const Question = styled.div `
  padding: 16px 24px 12px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
`
// const Answerss = styled.div `
//   padding: 16px 24px 12px;
//   border: solid #e0e0e0;
//   border-width: 0 0 1px;
// `
const AnswerBar = styled.form `

`

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerText: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementVote = this.incrementVote.bind(this);
    this.decrementVote = this.decrementVote.bind(this);
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
  reinitializeState() {
    this.setState({
      answerText: ''
    })
  }

  render() {
    return (
        <Body className='questionModule'>
          {this.props.questions.map((question, questionIndex) => {
            if (!this.state.showAll) return (
              <QuestionModule key={questionIndex} className='question'>
                <Question>
                  <div>{question.profilePic}</div>
                  <div>{question.username}</div>
                  <div>{question.date}</div>
                  <div>{question.numContributions} contributions</div>
                  <div>{question.numHelpfulVotes} helpful votes</div>
                  <div>{question.question}</div>
                  <br></br>
                </Question>
                <Answers answers={question.answers} questionIndex={questionIndex} incrementVote={this.incrementVote} decrementVote={this.decrementVote}/>
                {/* It will render x Answer components
                Button needs to be inside of the answer component
                Step 1 is to just transfer everything over and make sure it works
                Step 2 is to figure out */}
                {/* <Answerss>
                  {question.answers.map((answer, ansIndex) => (
                    // conditional here
                      // hard code for first question, map for all questions
                      // if only one question, no difference
                    <div key={ansIndex}>
                      <div>{answer.ansProfilePic}</div>
                      <div>Answer from {answer.ansUsername}</div>
                      <div>{answer.ansDate}</div>
                      <div>{answer.ansAnswer}</div>
                      <span>
                        <i className="far fa-thumbs-up" onClick={() => this.incrementVote(questionIndex, ansIndex)}></i><div>{answer.likes} votes</div><i className="far fa-thumbs-down" onClick={() => this.decrementVote(questionIndex, ansIndex)}></i>
                      </span>
                    </div>
                  ))}
                </Answerss> */}
                <AnswerQuestionBar questionIndex={questionIndex} handleSubmit={this.handleSubmit}/>
                {/* <AnswerBar>
                  <TextField placeholder="Answer question"  value={this.state.answerText} onChange={this.handleChange}></TextField>
                  <SubmitAButton onClick={() => this.handleSubmit(questionIndex)}>Submit</SubmitAButton>
                </AnswerBar> */}
              </QuestionModule>
            )
          })}
        </Body>
    )
  }
}

export default Questions;

// ways to fix this issue:
// move lines 85-100 to a new component