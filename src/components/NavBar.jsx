import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

    </div>
  )
}

export default NavBar
