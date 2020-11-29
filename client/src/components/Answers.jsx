import React from 'react';
import styled from 'styled-components';

const AnswersStyled = styled.div`
  padding: 16px 24px 24px 12px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
`
const Image = styled.img`
height: 28px;
width: 28px;
float: left;
margin: -3px 8px 0 -3px;
border-radius: 100%;
`
const AnswersHeader = styled.div`
margin-bottom: 12px;
display: block;
`
const AnswerFrom = styled.div`
  padding-bottom: 2px;
  font-size: 14px;
  line-height: 18px;
  color: #474747;
`
const Username = styled.span`
font-weight: 500;
`
const DateAndEllipsis = styled.span`
display: block;
font-size: 12px;
line-height: 20px;
color: #8c8c8c;
`
const Ellipsis = styled.div`
display: inline;
float: none;
position: relative;
color: rgb(0, 0, 0);
cursor: pointer;
`
const AnswerBody = styled.div`
  color: rgb(140, 140, 140);
  display: block;
  font-size: 14px;
  padding-left: 35px;
`
const Votes = styled.form`
  margin-top: 8px;
  line-height: 18px;
  display: flex;
  font-size: 12px;
`
const Likes = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  color: rgb(71, 71, 71);
  font-weight: 500;
  text-align: center;
`
const ThumbDown = styled.span`
  margin-bottom: -10px;
`
const ShowAnswerButton = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 16px;
  display: block;
  cursor: pointer;
`

class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAll: false
      // Need to make sure this is switched back to false
    }
    this.showTopAnswer = this.showTopAnswer.bind(this);
    this.showAllAnswers = this.showAllAnswers.bind(this);
    this.convertToMonthYear = this.convertToMonthYear.bind(this);
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
    if (this.state.showAll) {
      return (
        <div>
          {this.props.answers.map((answer, ansIndex) => {
            return (
              <AnswersStyled>
                <div key={ansIndex}>
                  <AnswersHeader>
                    <Image src={`${answer.ansProfilePic}`} ></Image>
                    <AnswerFrom><span>Answer from <Username>{answer.ansUsername}</Username></span></AnswerFrom>
                    <div>
                      <DateAndEllipsis>
                      {this.convertToMonthYear(answer.ansDate)} | <Ellipsis><span><i className="fas fa-ellipsis-h"></i></span></Ellipsis>
                      </DateAndEllipsis>
                    </div>
                  </AnswersHeader>
                  <AnswerBody>
                    {answer.ansAnswer}
                    <Votes>
                      <span>
                        <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, ansIndex)}></i>
                      </span>
                      <Likes>{answer.likes} votes</Likes>
                      <ThumbDown>
                        <i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, ansIndex)}></i>
                      </ThumbDown>
                    </Votes>
                  </AnswerBody>
                </div>
                {ansIndex === this.props.answers.length - 1 ? <ShowAnswerButton onClick={this.showTopAnswer}>Show top answer</ShowAnswerButton> : null}
              </AnswersStyled>
            )
          })}
          {/* <ShowAnswerButton onClick={this.showTopAnswer}>Show top answer</ShowAnswerButton> */}
        </div>
      )
    }
    else if (this.props.answers[0] !== undefined && this.props.answers.length === 1) {
      return (
        <AnswersStyled>
          <AnswersHeader>
            <Image src={`${this.props.answers[0].ansProfilePic}`} ></Image>
            <AnswerFrom><span>Answer from <Username>{this.props.answers[0].ansUsername}</Username></span></AnswerFrom>
            <div>
              <DateAndEllipsis>
                {this.convertToMonthYear(this.props.answers[0].ansDate)} | <Ellipsis><span><i className="fas fa-ellipsis-h"></i></span></Ellipsis>
              </DateAndEllipsis>
            </div>
          </AnswersHeader>
          <AnswerBody>
            {this.props.answers[0].ansAnswer}
            <Votes>
              <span>
                <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, 0)}></i>
              </span>
              <Likes>{this.props.answers[0].likes} votes</Likes>
              <ThumbDown>
                <i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, 0)}></i>
              </ThumbDown>
            </Votes>
          </AnswerBody>
        </AnswersStyled>
      )
    }
    else if (this.props.answers[0] !== undefined) {
      return (
        <AnswersStyled>
          <AnswersHeader>
            <Image src={`${this.props.answers[0].ansProfilePic}`} ></Image>
            <AnswerFrom><span>Answer from <Username>{this.props.answers[0].ansUsername}</Username></span></AnswerFrom>
            <div>
              <DateAndEllipsis>
                {this.convertToMonthYear(this.props.answers[0].ansDate)} | <Ellipsis><span><i className="fas fa-ellipsis-h"></i></span></Ellipsis>
              </DateAndEllipsis>
            </div>
          </AnswersHeader>
          <AnswerBody>
            {this.props.answers[0].ansAnswer}
            <Votes>
              <span>
                <i className="far fa-thumbs-up" onClick={() => this.props.incrementVote(this.props.questionIndex, 0)}></i>
              </span>
              <Likes>{this.props.answers[0].likes} votes</Likes>
              <ThumbDown>
                <i className="far fa-thumbs-down" onClick={() => this.props.decrementVote(this.props.questionIndex, 0)}></i>
              </ThumbDown>
            </Votes>
          </AnswerBody>
          <ShowAnswerButton onClick={this.showAllAnswers}>Show all answers</ShowAnswerButton>
        </AnswersStyled>
      )
    }
    else {
      return null;
    }
  }
}

export default Answers;