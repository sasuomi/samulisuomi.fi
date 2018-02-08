import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

import './App.css'

export default () => (
  <Router>
    <div>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
