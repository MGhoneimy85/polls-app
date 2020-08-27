import React, { Component } from 'react'
import {setAuthedUser} from '../actions/authedUser';
import { connect } from 'react-redux'

class Add extends Component {



  render() {
    return (
      <div className="add-view">
		add new Question 
      </div>
    )
  }
}




export default (Add)