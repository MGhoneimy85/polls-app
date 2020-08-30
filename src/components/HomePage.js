import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Redirect} from 'react-router-dom';


import Logout from './Logout';
import Add from './add';
import Navigation from './Navigation';
import LeaderBoard from './LeaderBoard';
import PollTabs from './PollTabs';
import PollDetails from './PollDetails';
import PollSaveAnswer from './PollSaveAnswer';


class HomePage extends Component {


  render() {
    
    return (
      
      <Router>
        <Fragment><div className="homepage-view">
       	<div className='top-section'>
      		<Navigation/>
       		<Logout/>
       </div>
        <div className='body-section center'>
            <Route path='/home' exact component={PollTabs} />
            <Route path='/add' exact component={Add} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
            <Route path='/PollDetails/:id' exact component={PollDetails} />
            <Route path='/PollSaveAnswer/:id' exact component={PollSaveAnswer} />
            
        </div>
        </div>
      
          
        </Fragment>
      </Router>
      
    );
  }
}



export default (HomePage)