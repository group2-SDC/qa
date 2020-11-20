import React from 'react';
import styled from 'styled-components';

const ModalDisplay = styled.div `
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  border-color: black;
  border-width: 1px;
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
class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    console.log('event.target.value: ', event.target.value);
    this.setState({
      question: event.target.value
    });
  }
  render() {
    return (
      <ModalDisplay>
      <TextFieldExpanded placeholder="Hi, what would you like to know about this attraction?" rows="5" onChange={this.handleChange} value={this.state.question}></TextFieldExpanded>
      <AnswerSubmission>
        <PostingGuidelines>
          <Guidelines>Posting Guidelines</Guidelines>
        </PostingGuidelines>
        <SubCancel>
          <SubmitAButton>Submit</SubmitAButton>
          <SubmitQButton onClick={() => this.props.hideModal()}>Cancel</SubmitQButton>
        </SubCancel>
      </AnswerSubmission>
      </ModalDisplay>
    )
  }
}


export default Modal;