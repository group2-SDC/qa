import React from 'react';

class Questions extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className='questionModule'>
          {this.props.questions.map((question) => (
            <div className='question'>
              <div>{question.profilePic}</div>
              <div>{question.username}</div>
              <div>{question.date}</div>
              <div>{question.numContributions} contributions</div>
              <div>{question.numHelpfulVotes} helpful votes</div>
              <div>{question.question}</div>
              <br></br>
            </div>
          ))}
        </div>
    )
  }
}

export default Questions;