import React from 'react';
import styled from 'styled-components';
import Answers from './Answers.jsx';
import AnswerQuestionBar from './AnswerQuestionBar.jsx';

const Body = styled.div`
  background-color: #f2f2f2;
  font-family: 'Poppins';
  ${Question}:nth-child(1) {
    margin-top: 16px;
  }
`
const QuestionModule = styled.div`
  margin-bottom: 12px;
  background-color: rgb(255, 255, 255);
`
const Question = styled.div`
  padding: 16px 24px 24px 12px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
`
const QuestionHeader = styled.div`
  margin-bottom: 16px;
  display: block;
`
const QuestionHeaderInfo = styled.div`
display: block;
`
const AnswerBar = styled.form`
`
const Image = styled.img`
height: 42px;
width: 42px;
border-radius: 100%;
float: left;
display: inline-block;
margin: -3px 8px 0 -3px;
`
const QuestionBody = styled.div`
  font-size: 16px;
  line-height: 20px;
`
const Ellipsis = styled.i`
  float: right;
  cursor: pointer;
`
const UserAndDate = styled.div`
  padding-bottom: 2px;
  font-size: 14px;
  line-height: 18px;
  color: #474747;
`
const LocationContVotes = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #8c8c8c;
`
const Location = styled.span`
`
const NumContributions = styled.span`
`
const NumHelpfulVotes = styled.span`
`
const Buttons = styled.div`
  margin-bottom: 12px;
  background-color: rgb(255, 255, 255);
  padding: 16px 24px 24px 12px;
  border: solid #e0e0e0;
  border-top-width: 1px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
`
const ButtonsSpan = styled.div `
display: inline-block;
`
const PrevButton = styled.button`
background-color: rgb(255, 255, 255);
border-color: rgb(0, 0, 0);
border-radius: 3px;
border-width: 1px;
color: rgb(0, 0, 0);
display: inline-block;
float: left;
padding-bottom: 8px;
padding-top: 8px;
padding-right: 16px;
padding-left: 16px;
text-align: center;
height: 36px;
width: 77px;
`
PrevButton.displayName = 'PrevButton';
const NextButton = styled.button`
background-color: rgb(0, 0, 0);
border-color: rgb(0, 0, 0);
border-radius: 3px;
border-width: 1px;
color: rgb(255, 255, 255);
display: inline-block;
float: right;
padding-bottom: 8px;
padding-top: 8px;
padding-right: 16px;
padding-left: 16px;
text-align: center;
height: 36px;
width: 77px;
`
NextButton.displayName = 'NextButton';
const CircleIcon = styled.span`
  font-size: 4px;
  vertical-align: middle;
`
const BoldSpan = styled.span`
  font-weight: 500;
`
class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerText: '',
      questionMin: 0,
      questionMax: 5,
      currentPage: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementVote = this.incrementVote.bind(this);
    this.decrementVote = this.decrementVote.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.convertToMonthYear = this.convertToMonthYear.bind(this);
  }

  handleChange(event) {
    this.setState({
      answerText: event.target.value
    })
  }
  handleSubmit(index, answerText) {
    // fix with event as parameter?
    event.preventDefault();
    this.props.addAnswer(answerText, index);
    this.reinitializeState();
  }
  incrementVote(questionIndex, ansIndex) {
    this.props.plusOneVote(questionIndex, ansIndex)
  }
  decrementVote(questionIndex, ansIndex) {
    this.props.minusOneVote(questionIndex, ansIndex)
  }
  nextPage() {
    this.setState({
      questionMin: this.state.questionMin + 5,
      questionMax: this.state.questionMax + 5,
      currentPage: this.state.currentPage + 1
    })
  }
  prevPage() {
    this.setState({
      questionMin: this.state.questionMin - 5,
      questionMax: this.state.questionMax - 5,
      currentPage: this.state.currentPage - 1
    })
  }
  reinitializeState() {
    this.setState({
      answerText: ''
    })
  }
  convertToMonthYear(date) {
    var split = date.split('-')
    var monthsObj = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec'
    }
    return monthsObj[split[1]] + ' ' + split[0]
  }

  render() {
    return (
      <Body className='questionModule'>
        {this.props.questions.map((question, questionIndex) => {
          if (questionIndex >= this.state.questionMin && questionIndex < this.state.questionMax) return (
            <QuestionModule key={questionIndex} className='question'>
              <Question>
                <QuestionHeader>
                  <Image src={`${question.profilePic}`} ></Image>
                  <QuestionHeaderInfo>
                    <Ellipsis className="fas fa-ellipsis-h"></Ellipsis>
                    <UserAndDate>
                      <div><BoldSpan>{question.username}</BoldSpan> asked a question {this.convertToMonthYear(question.date)}</div>
                    </UserAndDate>
                    <LocationContVotes>
                      <span><i className="fas fa-map-marker-alt"></i></span><Location> {question.location} </Location>
                      {question.numContributions > 0 ? <NumContributions><CircleIcon><i className="fas fa-circle"></i></CircleIcon><BoldSpan> {question.numContributions} </BoldSpan> contributions </NumContributions> : null}
                      {question.numHelpfulVotes > 0 ? <NumHelpfulVotes><CircleIcon><i className="fas fa-circle"></i></CircleIcon><BoldSpan> {question.numHelpfulVotes} </BoldSpan> helpful votes</NumHelpfulVotes> : null}
                    </LocationContVotes>
                  </QuestionHeaderInfo>
                </QuestionHeader>
                <QuestionBody>
                  <div>{question.question}</div>
                </QuestionBody>
                <br></br>
              </Question>
              <Answers answers={question.answers} questionIndex={questionIndex} incrementVote={this.incrementVote} decrementVote={this.decrementVote} />
              <AnswerQuestionBar questionIndex={questionIndex} handleSubmit={this.handleSubmit} />
            </QuestionModule>
          )
        })}
        <Buttons>
          <ButtonsSpan>
            {this.state.currentPage > 1 ? <PrevButton onClick={this.prevPage}>Previous</PrevButton> : null}
            {this.state.currentPage * 5 > this.props.questions.length ? null : <NextButton onClick={this.nextPage}>Next</NextButton>}
            </ButtonsSpan>
          </Buttons>
      </Body>
    )
  }
}

export default Questions;

// ways to fix this issue:
// move lines 85-100 to a new component