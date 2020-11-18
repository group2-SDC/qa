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
  }
  handleChange(event) {
    console.log('event.target.value: ', event.target.value);
    this.setState({
      answerText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <TextField placeholder="Answer question" value={this.state.answerText} onChange={this.handleChange}></TextField>
        <SubmitAButton onClick={() => this.props.handleSubmit(this.props.questionIndex, this.state.answerText)}>Submit</SubmitAButton>
      </div>
    )
  }
}

export default AnswerQuestionBar;