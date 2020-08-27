import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import HomePage from './HomePage'

class App extends Component {

  render() {
    return (
          <div className='container'>
            {this.props.loading === true ? <Login /> : <HomePage />}
          </div>
    )
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
