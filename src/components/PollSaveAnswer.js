import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { handleAddQuestionAnswer } from '../actions/shared';

class PollSaveAnswer extends Component {

  state = {
    selectedValue: '',
    success: false
};

handleSubmit(e, questionId) {
    e.preventDefault();

    const {dispatch} = this.props;
    const {selectedValue} = this.state;
      
    dispatch(handleAddQuestionAnswer(this.props.authedUser ,questionId, selectedValue));

    this.setState(() => ({
        selectedValue: '',
        success: true
    }));
}

handleInputChange = (e) => {
    const text = e.target.value;

    this.setState(() => ({
        selectedValue: text
    }));
};

  render() {
    if (this.state.success === true) {
      return <Redirect to='/home'/>;
    }
    const {selectedValue} = this.state;
    const { question , author   } = this.props
    
      return (

          <div className="answeredpoll-item">
            <h3>Poll Voting</h3>
            <div><img src={author.avatarURL} alt={author.name} className="authorImage" /></div>
            <div>   {question.author} asks :</div>
            <div >Whould you rather ?</div>
            <form onSubmit={(e) => this.handleSubmit(e, question.id)} >
            <div>
              <input type="radio" name="radioGroup" value="optionOne" onChange={this.handleInputChange} />
              <span > {question.optionOne.text} </span>
              </div>
              <div>
              <input type="radio" name="radioGroup" value="optionTwo" onChange={this.handleInputChange} />
              <span > {question.optionTwo.text} </span>
              </div>
                                                                 
            

            
            <div ><button type="submit" disabled={selectedValue === ''} >Vote</button></div>

            </form>
           
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
    authedUser, 
    author:users[questions[id].author],
    question: questions[id]
  }
}

export default connect(mapStateToProps)(PollSaveAnswer)