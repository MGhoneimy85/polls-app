import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PollItem from './PollItem';
import 'react-tabs/style/react-tabs.css';
class PollTabs extends Component {


  render() {
    return (
      <div className="PollTabs-view">
        <Tabs>
          <TabList>
            <Tab>UnAnswerd Polls</Tab>
            <Tab>Answerd Polls</Tab>
          </TabList>
          <TabPanel>
            {
              Object.values(this.props.questions)
              .filter(question =>  this.props.users[this.props.authedUser].questions.includes(question.id))
              .sort((a, b) => b.timestamp - a.timestamp).map((question) => {
              return <PollItem question={question} author={this.props.users[question.author]} key={question.id}  answerd={false} />
            })

          }
           
          </TabPanel>     
          <TabPanel>
            {
              Object.values(this.props.questions)
              .filter(question =>  !this.props.users[this.props.authedUser].questions.includes(question.id))
              .sort((a, b) => b.timestamp - a.timestamp).map((question) => {
              return <PollItem question={question} author={this.props.users[question.author]} key={question.id} answerd={true} />
            })

          }
          </TabPanel>
        </Tabs>
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

export default connect(mapDispatchToProps)(PollTabs)