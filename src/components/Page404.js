import React from 'react';
import { NavLink } from 'react-router-dom'
const Page404 = () => (
    <div className="Page404-view center">
        <img src="/error.png" alt="error" />
        <div className="center" >
            page not found
        </div>
        <div className="center">
            <NavLink to='/' exact activeClassName='active'>
               <b>click here to redirect you to Home page</b>
            </NavLink>
        </div>
    </div>
);

export default Page404;