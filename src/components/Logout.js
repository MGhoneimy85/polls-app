import React, { Component } from 'react'
import {setAuthedUser} from '../actions/authedUser';
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
class Logout extends Component {
  
  onlogoutClicked = (e) => {
    const history = createBrowserHistory()
    history.push('/');
     this.props.dispatch(setAuthedUser(null));
         
  };

  render() {
    return (
      <div className="logout-view">
		<button type="button" onClick={(e) => this.onlogoutClicked(e)}  >Logout</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {

  return { dispatch };
}


export default connect(mapDispatchToProps)(Logout)