import React from 'react'
import ReactDOM from 'react-dom'
import history from './history'
import {BrowserRouter, Router} from 'react-router-dom'

import App from './app'

const Main = (props) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
