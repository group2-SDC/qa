import React from 'react';
import styled from 'styled-components';

const Body = styled.div `
  background-color: #f2f2f2;
  font-family: 'Poppins';
  ${Question}:nth-child(1) {
    margin-top: 16px;
  }
`
const Question = styled.div `
  margin-bottom: 12px;
`

class Questions extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Body className='questionModule'>
          {this.props.questions.map((question) => (
            <Question className='question'>
              <div>{question.profilePic}</div>
              <div>{question.username}</div>
              <div>{question.date}</div>
              <div>{question.numContributions} contributions</div>
              <div>{question.numHelpfulVotes} helpful votes</div>
              <div>{question.question}</div>
              <br></br>
            </Question>
            // <Answer>
            // </Answer>
          ))}
        </Body>
    )
  }
}

export default Questions;