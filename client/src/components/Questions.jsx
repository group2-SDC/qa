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
const AskQuestionBar = styled.form `

`
const TextField = styled.input `
`
const SubmitQButton = styled.button`

`
class Questions extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Body className='questionModule'>
          <AskQuestionBar>
            <TextField type="text"></TextField>
            <SubmitQButton>Ask a question</SubmitQButton>
          </AskQuestionBar>
          {this.props.questions.map((question) => (
            <QuestionModule className='question'>
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
                {question.answers.map((answer) => (
                  <div>
                    <div>{answer.ansProfilePic}</div>
                    <div>Answer from {answer.ansUsername}</div>
                    <div>{answer.ansDate}</div>
                    <div>{answer.ansAnswer}</div>
                    <div>{answer.likes} votes</div>
                  </div>
                ))}
              </Answers>
            </QuestionModule>
          ))}
        </Body>
    )
  }
}

export default Questions;