import React from 'react';
import styled from 'styled-components';

const TextField = styled.textarea`
`
const SubmitAButton = styled.button`
`
const AnswerBarStyled = styled.div `
  padding: 16px 24px 24px 12px;
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
      <AnswerBarStyled>
        <TextField placeholder="Answer question" value={this.state.answerText} onChange={this.handleChange}></TextField>
        <SubmitAButton onClick={() => this.handleSubmit(this.props.questionIndex, this.state.answerText)}>Submit</SubmitAButton>
      </AnswerBarStyled>
    )
  }
}

export default AnswerQuestionBar;