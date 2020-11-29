import React from 'react';
import styled from 'styled-components';

const TextFieldDiv = styled.div `
display: block;
font-family: Poppins;
width: 100%;
`
const TextField = styled.textarea `
box-sizing: border-box;
padding: 12px;
font-size: 14px;
border: 1px solid;
border-radius: 2px;
padding: 12px;
border-color: rgb(224, 224, 224);
font-family: Poppins;
display: inline-block;
height: 41px;
width: 95%;
overflow: hidden;
resize: none;
`
const TextFieldExpanded = styled.textarea `
box-sizing: border-box;
padding: 12px;
font-size: 14px;
border: 1px solid;
border-radius: 2px;
padding: 12px;
border-color: rgb(224, 224, 224);
font-family: Poppins;
display: inline-block;
width: 95%;
overflow: hidden;
resize: none;
`
const SubmitAButton = styled.button `
background-color: rgb(0, 0, 0);
border-color: rgb(0, 0, 0);
border-radius: 3px;
border-width: 1px;
color: rgb(255, 255, 255);
display: inline-block;
padding-bottom: 8px;
padding-top: 8px;
padding-right: 16px;
padding-left: 16px;
text-align: center;
height: 36px;
width: 77px;
margin-right: 16px;
cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #292929;
  }
`
const SubmitQButton = styled.button `
background-color: rgb(255, 255, 255);
border-color: rgb(0, 0, 0);
border-radius: 3px;
border-width: 1px;
color: rgb(0, 0, 0);
display: inline-block;
padding-bottom: 8px;
padding-top: 8px;
padding-right: 16px;
padding-left: 16px;
text-align: center;
height: 36px;
width: 77px;
cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #d6d6d6;
  }
`
const AnswerBarStyled = styled.div `
  padding: 16px 24px 24px 12px;
  display: block;
`
const Form = styled.form `
display: flex;
`
const Image = styled.img `
height: 28px;
width: 28px;
float: left;
margin: -3px 8px 0 -3px;
border-radius: 100%;
display: inline-block;
line-height: 18px;
`
const AnswerSubmission = styled.div `
`
const PostingGuidelines = styled.div `
margin-top: 16px;
color: rgb(44, 44, 44);
`
const Guidelines = styled.span `
font-size: 14px;
border-bottom: 1px dotted #e0e0e0;
flex-grow: 0;
float: right;
margin-right: 10px;
display: inline-block;
`
const SubCancel = styled.div `
display: inline-block;
float: left;
`

class AnswerQuestionBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerText: '',
      expanded: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  handleChange(event) {
    this.setState({
      answerText: event.target.value
    })
  }
  handleSubmit(questionIndex, answerText) {
    event.preventDefault();
    this.props.handleSubmit(questionIndex, answerText);
    this.reinitializeState();
  }
  handleClick() {
    this.setState({
      expanded: true
    })
  }
  cancel() {
    this.setState({
      expanded: false
    })
  }
  reinitializeState() {
    this.setState({
      answerText: ''
    })
  }

  render() {
    return (
      <AnswerBarStyled>
        <Form>
          <Image src={`https://picsum.photos/id/100/200`}></Image>
          <TextFieldDiv>
            {this.state.expanded ?
            <div>
            <TextFieldExpanded placeholder="Answer question" rows="3" value={this.state.answerText} onChange={this.handleChange}></TextFieldExpanded>
            <AnswerSubmission>
              <PostingGuidelines>
                <Guidelines>Posting Guidelines</Guidelines>
              </PostingGuidelines>
              <SubCancel>
                <SubmitAButton onClick={() => this.handleSubmit(this.props.questionIndex, this.state.answerText)}>Submit</SubmitAButton>
                <SubmitQButton onClick={() => this.cancel()}>Cancel</SubmitQButton>
              </SubCancel>
            </AnswerSubmission>
            </div>
            :
            <TextField placeholder="Answer question" value={this.state.answerText} onClick={this.handleClick}onChange={this.handleChange}></TextField>}
          </TextFieldDiv>
          {/* <SubmitAButton onClick={() => this.handleSubmit(this.props.questionIndex, this.state.answerText)}>Submit</SubmitAButton> */}
        </Form>
      </AnswerBarStyled>
    )
  }
}

export default AnswerQuestionBar;