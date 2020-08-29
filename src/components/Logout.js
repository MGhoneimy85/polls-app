import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'

class Logout extends Component {

  // state = {
  //   authedUser: this.props.dispatch.authedUser
  // }
  onlogoutClicked = (e) => {
    createBrowserHistory().push('/');
    this.props.dispatch(setAuthedUser(null));

  };

  render() {

    return (
      <div className="logout-view">
        <span>Hello ,<b>  {this.props.authedUser} </b> </span>
        <img src={this.props.users[this.props.authedUser].avatarURL} alt={this.props.users[this.props.authedUser].name} className="loggedinUserImage" />
        <button type="button" onClick={(e) => this.onlogoutClicked(e)}  >Logout</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch, authedUser: dispatch.authedUser, users: dispatch.users };
}


export default connect(mapDispatchToProps)(Logout)