import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'



import Logout from './Logout';
import Navigation from './Navigation';

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
          Body Section
        </div>
        </div>
      
          
        </Fragment>
      </Router>
      
    )
  }
}



export default (HomePage)