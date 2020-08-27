import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'



import Logout from './Logout';
import Add from './add';
import Navigation from './Navigation';
import LeaderBoard from './LeaderBoard';

class HomePage extends Component {


  render() {
    return (
      <Router>
        <Fragment><div className="homepage-view">
        <h3 className='center'>Home Page</h3>
       	<div className='top-section'>
      		<Navigation/>
       		<Logout/>
       </div>
        <div className='body-section center'>
            <h3> body section</h3>
            <Route path='/add' exact component={Add} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
            
        </div>
        </div>
      
          
        </Fragment>
      </Router>
      
    )
  }
}



export default (HomePage)