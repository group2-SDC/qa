import React from 'react';
import styled from 'styled-components';

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
              <div key={ansIndex}>
                <div>{answer.ansProfilePic}</div>
                <div>Answer from {answer.ansUsername}</div>
                <div>{answer.ansDate}</div>
                <div>{answer.ansAnswer}</div>
                <span>
                  <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, ansIndex)}></i><div>{answer.likes} votes</div><i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, ansIndex)}></i>
                </span>
              </div>
            )
          })}
          <button onClick={this.showTopAnswer}>Show top answer</button>
        </div>
      )
    } else if (this.props.answers[0] !== undefined && this.props.answers.length === 1) {
      return (
        <div>
            <div>{this.props.answers[0].ansProfilePic}</div>
            <div>Answer from {this.props.answers[0].ansUsername}</div>
            <div>{this.props.answers[0].ansDate}</div>
            <div>{this.props.answers[0].ansAnswer}</div>
            <span>
              <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, 0)}></i><div>{this.props.answers[0].likes} votes</div><i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, 0)}></i>
            </span>
        </div>
      )
    } else if (this.props.answers[0] !== undefined) {
      return (
        <div>
            <div>{this.props.answers[0].ansProfilePic}</div>
            <div>Answer from {this.props.answers[0].ansUsername}</div>
            <div>{this.props.answers[0].ansDate}</div>
            <div>{this.props.answers[0].ansAnswer}</div>
            <span>
              <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, 0)}></i><div>{this.props.answers[0].likes} votes</div><i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, 0)}></i>
            </span>
            <button onClick={this.showAllAnswers}>Show all answers</button>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default Answers;