import React, { Component } from 'react'
import {setAuthedUser} from '../actions/authedUser';
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { receiveQuestions } from '../actions/questions'
import 'react-tabs/style/react-tabs.css';
class PollTabs extends Component {

  componentDidMount() {
    this.props.dispatch(receiveQuestions())
  }

  render() {
    return (
      <div className="PollTabs-view">
        <Tabs>
          <TabList>
            <Tab>UnAnswerd Polls</Tab>
            <Tab>Answerd Polls</Tab>
          </TabList>
          <TabPanel>
            <h2>Any content 1</h2>
            {
                  Object.keys(this.props.questions).map((question) => {
                    if(this.props.questions[question].optionOne.votes.length > 0 && this.props.questions[question].optionOne.votes.length > 0 )
                    return <div key={this.props.questions[question].id} >{this.props.questions[question].author}</div>
                })
                }
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

function mapStateToProps ({ questions,setAuthedUser}) {
  return {
    questions: questions,
    authedUser:setAuthedUser
  }
}


export default connect(mapStateToProps)(PollTabs)