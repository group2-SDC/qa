import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const Header = styled.div `
  background-color: rgb(255, 255, 255);
`
const AskQuestionBar = styled.form `

`
const TextField = styled.textarea `
`
TextField.displayName = 'TextField';

const SubmitQButton = styled.button`
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-radius: 3px;
  border-width: 1px;
  display: block;
  color: rgb(255, 255, 255);
  // Will need to fix float
  padding-bottom: 8px;
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
  text-align: center;
  height: 36px;
  width: 126px;
  right: 2%;
`
SubmitQButton.displayName = 'SubmitQButton'

const LowerSpanDiv = styled.div `
padding: 0 24px;
margin-bottom: 24px;
`
const Styling1 = styled.div `
  padding-top: 16px;

`
const Styling2 = styled.div `
padding-bottom: 18px;
`
const TopSpan = styled.div `
  padding: 16px 12px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  position: relative;
  font-weight: 500;
`
const TopSpanDiv = styled.div `
  border: solid #e0e0e0;
  border-width: 1px;
`
const QandA = styled.div `
  display: block;
  width: 60%;
  font-size: 28px;
  font-weight: 500;
`
const SeeAll = styled.div `
  font-size: 14px;
  font-weight: 500;
`

class AskQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      showModal: false
      // WILL NEED TO SWITCH BACK TO DEFAULT VALUE FALSE
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      question: event.target.value
    });
  }
  handleSubmit(question) {
    event.preventDefault();
    this.props.addQuestion(question);
    this.reinitializeState();
  }
  reinitializeState() {
    this.setState({
      question: ''
    })
  }
  showModal() {
    this.setState({
      showModal: true
    })
  }
  hideModal() {
    this.setState({
      showModal: false
    })
  }
  render() {
    if (!this.state.showModal) {
      return (
        <Header>
          <TopSpanDiv>
            <TopSpan>
              <i className="far fa-comment-alt"></i>
              <div>{this.props.questions.length}<br></br>Q&A</div>
            </TopSpan>
          </TopSpanDiv>
          <LowerSpanDiv>
            <Styling1>
              <Styling2>
              <QandA>
                Questions & Answers
                <SeeAll>See all {this.props.questions.length} questions</SeeAll>
                <SubmitQButton onClick={() => this.showModal()}>Ask a question</SubmitQButton>
              </QandA>
            <AskQuestionBar>
              {/* <TextField onChange={this.handleChange} value={this.state.question} name="question"></TextField> */}
            </AskQuestionBar>
              </Styling2>
            </Styling1>
          </LowerSpanDiv>
        </Header>
      )
    } else {
      return (
        <Header>
          <TopSpanDiv>
            <TopSpan>
              <i className="far fa-comment-alt"></i>
              <div>{this.props.questions.length}<br></br>Q&A</div>
            </TopSpan>
          </TopSpanDiv>
          <LowerSpanDiv>
            <Styling1>
              <Styling2>
              <QandA>
                Questions & Answers
                <SeeAll>See all {this.props.questions.length} questions</SeeAll>
                <SubmitQButton onClick={this.showModal}>Ask a question</SubmitQButton>
              </QandA>
            <AskQuestionBar>
              {/* <TextField onChange={this.handleChange} value={this.state.question} name="question"></TextField> */}
            </AskQuestionBar>
            <Modal hideModal={this.hideModal} handleSubmit={this.handleSubmit}/>
              </Styling2>
            </Styling1>
          </LowerSpanDiv>
        </Header>
      )
    }
  }
}

export default AskQuestion;