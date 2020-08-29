import React, { Component } from 'react'
import { connect } from 'react-redux'


class LeaderBoard extends Component {



  render() {
    return (
      <div className="LeaderBoard-view">
          <h2>LeaderBoard</h2>
          
          {
          Object.keys(this.props.users).sort((a, b) => (Object.keys(this.props.users[a].answers).length + Object.keys(this.props.users[a].questions).length) - (Object.keys(this.props.users[b].answers).length + Object.keys(this.props.users[b].questions).length) ).reverse().map((user) => {
            
            return  <div className="leaderboarditem" key={user}>
                      <div> {this.props.users[user].name}</div>
                      <div> <img src={this.props.users[user].avatarURL} alt={this.props.users[user].name}  className="authorImage" /> </div>
                      <div> Total Answered polls : {Object.keys(this.props.users[user].answers).length}</div>
                      <div>  Total Created  polls : {Object.keys(this.props.users[user].questions).length}</div>
                      <div className="scrore">  Score: {Object.keys(this.props.users[user].answers).length + Object.keys(this.props.users[user].questions).length}</div>
                    </div>
  
            })
            
          
           
          }
           
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch:dispatch , 
            authedUser:dispatch.authedUser,
            users:dispatch.users,
            questions:dispatch.questions
          }
}




export default connect(mapDispatchToProps)(LeaderBoard)