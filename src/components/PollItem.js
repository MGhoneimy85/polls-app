import React, { Component } from 'react'


class PollItem extends Component {



  render() {
    const { question, author, answerd } = this.props
    if (answerd) {
      return (
        
          <div className="answeredpoll-item">
            <div><img src={author.avatarURL} alt={author.name} className="authorImage" /></div>
            <div>   {question.author} asks :</div>
            <div >Whould you rather ?</div>
            <div >{question.optionOne.text} <b>OR</b>  {question.optionTwo.text} </div>
          </div>
      )
    } else {
      return (
          <div className="unansweredpoll-item">
            <div><img src={author.avatarURL} alt={author.name} className="authorImage" /></div>
            <div>   {question.author} asks :</div>
            <div >Whould you rather ?</div>
            <div >{question.optionOne.text} <b>OR</b>  {question.optionTwo.text} </div>
          </div>
      )
    }

  }
}




export default (PollItem)