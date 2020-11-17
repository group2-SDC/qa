import React from 'react';
import styled from 'styled-components';

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
const Answers = styled.div `
  padding: 16px 24px 12px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
`
const AnswerBar = styled.form `

`
const TextField = styled.textarea `
`
const SubmitQButton = styled.button`

`

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('event.target.value: ', event.target.value);
    this.setState({
      answerText: event.target.value
    })
  }
  handleSubmit(index) {
    event.preventDefault();
    console.log("INDEX: ", index);
    this.props.addAnswer(this.state.answerText, index);
    this.reinitializeState();
  }
  reinitializeState() {
    this.setState({
      answerText: ''
    })
  }

  render() {
    return (
        <Body className='questionModule'>
          {this.props.questions.map((question, index) => (
            <QuestionModule key={index} className='question'>
              <Question>
                <div>{question.profilePic}</div>
                <div>{question.username}</div>
                <div>{question.date}</div>
                <div>{question.numContributions} contributions</div>
                <div>{question.numHelpfulVotes} helpful votes</div>
                <div>{question.question}</div>
                <br></br>
              </Question>
              <Answers>
                {question.answers.map((answer, index) => (
                  <div key={index}>
                    <div>{answer.ansProfilePic}</div>
                    <div>Answer from {answer.ansUsername}</div>
                    <div>{answer.ansDate}</div>
                    <div>{answer.ansAnswer}</div>
                    <div>{answer.likes} votes</div>
                  </div>
                ))}
              </Answers>
              <AnswerBar>
                <TextField placeholder="Answer question" onChange={this.handleChange} value={this.state.answerText}></TextField>
                <SubmitQButton onClick={() => this.handleSubmit(index)}>Submit</SubmitQButton>
              </AnswerBar>
            </QuestionModule>
          ))}
        </Body>
    )
  }
}

export default Questions;