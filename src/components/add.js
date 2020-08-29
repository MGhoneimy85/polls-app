import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/shared';
import { connect } from 'react-redux';

import { Redirect } from "react-router-dom";
class Add extends Component {

  state = {
    value1: '',
    value2: '',
    success:false
  }

  handlevalue1Change = (e) => {
    const text = e.target.value;

    this.setState({
      value1: text
    });
  };

  handlevalue2Change = (e) => {
    const text = e.target.value;

    this.setState({
      value2: text
    });
  };
  handleSubmit = (e) => {
    e.preventDefault()

    const { value1, value2 } = this.state;



    this.props.dispatch(handleAddQuestion(value1, value2, this.props.authedUser, () => {
      this.setState({
        value1: '',
        value2: '',
        success:true
      });
    }));
  }

  render() {
    if (this.state.success === true) {
      return <Redirect to='/home'/>;
    }
    const { value1, value2 } = this.state
    return (
      <div className="add-view">
        <h3 className='center'>Compose new Poll</h3>
        <div className="question-div"> Whould you Rather ? </div>
        <form onSubmit={this.handleSubmit}>
          <div className="">
            <div className="">
              <span>value one</span><br />
              <input placeholder='Enter first value' value={value1} onChange={this.handlevalue1Change} />
            </div>
            <div className="or">
              OR
            </div>
            <div className="">
              <span>value two</span><br />
              <input placeholder='Enter second value' value={value2} onChange={this.handlevalue2Change} />
            </div>
          </div>
          <input type='submit' value={"add"} disabled={value1 === '' || value2 === ''} />
        </form>
      </div>
    )
    
  }
}

function mapDispatchToProps(dispatch) {
  return { authedUser: dispatch.authedUser };
}


export default connect(mapDispatchToProps)(Add)