import React from 'react';
import styled from 'styled-components';

class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAll: false
    }
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
                  <i className="far fa-thumbs-up"></i><div>{answer.likes} votes</div><i className="far fa-thumbs-down"></i>
                </span>
              </div>
            )
          })}
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
              <i className="far fa-thumbs-up"></i><div>{this.props.answers[0].likes} votes</div><i className="far fa-thumbs-down"></i>
            </span>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default Answers;