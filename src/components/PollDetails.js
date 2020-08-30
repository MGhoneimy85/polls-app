import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollDetails extends Component {

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    
    const { question , author , LoggedInUser  } = this.props
    
      return (

          <div className="answeredpoll-item">
            <h3>Poll Details</h3>
            <div><img src={author.avatarURL} alt={author.name} className="authorImage" /></div>
            <div>   {question.author} asks :</div>
            <div >Whould you rather ?</div>
            <div > <span  className={`${LoggedInUser.answers[question.id] === 'optionOne' ? "active" : ""}`} > {question.optionOne.text} </span> <b>OR</b> <span  className={` ${LoggedInUser.answers[question.id] === 'optionTwo' ? "active" : "" }`} >{question.optionTwo.text} </span> </div>
            <div >{question.optionOne.votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes  <b>===============</b> {question.optionTwo.votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes </div>

            <div >{Math.round((question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100)}  % <b>===============</b> {Math.round((question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100)} %  </div>
            <div ><button type="button" onClick={this.handleClick} >back</button></div>
          </div>
      )
  }
}

function mapStateToProps ({ questions , users , authedUser }, props ) {
  const {id} = props.match.params;
  return {
    id,
    questions,
    users,
    LoggedInUser : users[authedUser], 
    author:users[questions[id].author],
    question: questions[id]
  }
}

export default connect(mapStateToProps)(PollDetails)