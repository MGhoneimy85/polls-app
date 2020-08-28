import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser';
import { handleInitialData } from '../actions/shared'

class Login extends Component {

  state = {
    authenticatedUser: '',
  }

  componentDidMount() {
	this.props.dispatch(handleInitialData())
  }
  
  onChange = (e) => {
    
    const userID = e.target.value;
    this.setState(() => ({
      authenticatedUser : userID
    }))
  		
  };

  onSubmit = (e) => {
   	e.preventDefault();
     
    if(this.state.authenticatedUser === ''){
      alert('please select user first'); // validation TODO: to be updated to vallidation message under for better UX
    } else {
      this.props.dispatch(setAuthedUser(this.state.authenticatedUser));
    }
   
  };
  render() {
    return (
      <div className="login-view">
       <h2> welcome to poll app </h2>
        <h3 className='center'>Sign In</h3>
        <form onSubmit={(e) => this.onSubmit(e)} >
              <label>Select User</label>

              <select className="form-control" id="userId" onChange={(e) => this.onChange(e)}>
                <option>select user</option>
                {
                  Object.keys(this.props.users).map((user) => {
                    return <option key={this.props.users[user].id} value={this.props.users[user].id}>{this.props.users[user].name}</option>
                })
                }
             </select>
			 <button type="submit" value="sign in" >Sign In</button>
		</form>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(Login)