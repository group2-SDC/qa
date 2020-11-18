import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
  background-color: rgb(255, 255, 255);
  margin-bottom: 24px;
  padding: 0 16px;
`
const AskQuestionBar = styled.form `

`
const TextField = styled.textarea `
`
TextField.displayName = 'TextField';

const SubmitQButton = styled.button`
`
SubmitQButton.displayName = 'SubmitQButton'

class AskQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      question: event.target.value
    });
  }
  handleSubmit() {
    event.preventDefault();
    this.props.addQuestion(this.state.question);
    this.reinitializeState();
  }
  reinitializeState() {
    this.setState({
      question: ''
    })
  }
  render() {
    return (
      <Header>
        <i class="far fa-comment-alt"></i>
        <div>{this.props.questions.length} Q & A</div>
        <div>Questions & Answers</div>
        <AskQuestionBar>
          <TextField onChange={this.handleChange} value={this.state.question} name="question"></TextField>
          <SubmitQButton onClick={this.handleSubmit}>Ask a question</SubmitQButton>
        </AskQuestionBar>
      </Header>
    )
  }
}

export default AskQuestion;