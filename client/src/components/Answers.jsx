import React from 'react';
import styled from 'styled-components';

const AnswersStyled = styled.div `
  padding: 16px 24px 24px 12px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
`

class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAll: false
    }
    this.showTopAnswer = this.showTopAnswer.bind(this);
    this.showAllAnswers = this.showAllAnswers.bind(this);
  }
  // Next: get show all answers and show top answer to work, create functions that setState
  // Then refactor the plus one vote and minus one vote functions to work

  showTopAnswer() {
    this.setState({
      showAll: false
    })
  }
  showAllAnswers() {
    this.setState({
      showAll: true
    })
  }
  render() {
    if (this.state.showAll) {
      return (
        <div>
          {this.props.answers.map((answer, ansIndex) => {
            return (
              <AnswersStyled>
                <div key={ansIndex}>
                  <div>{answer.ansProfilePic}</div>
                  <div>Answer from {answer.ansUsername}</div>
                  <div>{answer.ansDate}</div>
                  <i className="fas fa-ellipsis-h"></i>
                  <div>{answer.ansAnswer}</div>
                  <span>
                    <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, ansIndex)}></i><div>{answer.likes} votes</div><i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, ansIndex)}></i>
                  </span>
                </div>
              </AnswersStyled>
            )
          })}
          <button onClick={this.showTopAnswer}>Show top answer</button>
        </div>
      )
    } else if (this.props.answers[0] !== undefined && this.props.answers.length === 1) {
      return (
        <AnswersStyled>
            <div>{this.props.answers[0].ansProfilePic}</div>
            <div>Answer from {this.props.answers[0].ansUsername}</div>
            <div>{this.props.answers[0].ansDate}</div>
            <i className="fas fa-ellipsis-h"></i>
            <div>{this.props.answers[0].ansAnswer}</div>
            <span>
              <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, 0)}></i><div>{this.props.answers[0].likes} votes</div><i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, 0)}></i>
            </span>
        </AnswersStyled>
      )
    } else if (this.props.answers[0] !== undefined) {
      return (
        <AnswersStyled>
            <div>{this.props.answers[0].ansProfilePic}</div>
            <div>Answer from {this.props.answers[0].ansUsername}</div>
            <div>{this.props.answers[0].ansDate}</div>
            <i className="fas fa-ellipsis-h"></i>
            <div>{this.props.answers[0].ansAnswer}</div>
            <span>
              <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, 0)}></i><div>{this.props.answers[0].likes} votes</div><i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, 0)}></i>
            </span>
            <button onClick={this.showAllAnswers}>Show all answers</button>
        </AnswersStyled>
      )
    }
    else {
      return null;
    }
  }
}

export default Answers;