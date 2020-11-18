import React from 'react';
import styled from 'styled-components';

const TextField = styled.textarea`
`
const SubmitAButton = styled.button`
`

class AnswerQuestionBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    console.log('event.target.value: ', event.target.value);
    this.setState({
      answerText: event.target.value
    })
  }
  handleSubmit(questionIndex, answerText) {
    event.preventDefault();
    this.props.handleSubmit(questionIndex, answerText);
    this.reinitializeState();
  }
  reinitializeState() {
    this.setState({
      answerText: ''
    })
  }

  render() {
    return (
      <div>
        <TextField placeholder="Answer question" value={this.state.answerText} onChange={this.handleChange}></TextField>
        <SubmitAButton onClick={() => this.handleSubmit(this.props.questionIndex, this.state.answerText)}>Submit</SubmitAButton>
      </div>
    )
  }
}

export default AnswerQuestionBar;