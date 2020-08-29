import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class PollItem extends Component {

  handleClick = () => {
    this.props.history.push('/PollDetails');
  }

  handleVoteClick = () => {
    this.props.history.push('/PollSaveAnswer');
  }

  render() {
    const { question, author, answerd } = this.props
    if (answerd) {
      return (
        <Link to={`/PollDetails/${question.id}`} className='answeredpoll-item'>
            <div><img src={author.avatarURL} alt={author.name} className="authorImage" /></div>
            <div>   {question.author} asks :</div>
            <div >Whould you rather ?</div>
            <div >{question.optionOne.text} <b>OR</b>  {question.optionTwo.text} </div>
            <div ><button type="button" onClick={this.handleClick} > view details</button></div>
        </Link>
      )
    } else {
      return (
        <Link to={`/PollSaveAnswer/${question.id}`} className='unansweredpoll-item'>
            <div><img src={author.avatarURL} alt={author.name} className="authorImage" /></div>
            <div>   {question.author} asks :</div>
            <div >Whould you rather ?</div>
            <div >{question.optionOne.text} <b>OR</b>  {question.optionTwo.text} </div>
            <div ><button type="button" onClick={this.handleVoteClick} > Go Vote </button></div>
        </Link>
      )
    }

  }
}




export default withRouter((PollItem))