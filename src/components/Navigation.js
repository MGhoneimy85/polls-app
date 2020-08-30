import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Poll
          </NavLink>
        </li>
            <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}