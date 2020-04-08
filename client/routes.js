import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {About, Projects, Skills, Contact} from './Components'
import {BrowserRouter, Router} from 'react-router-dom'
import {withRouter} from 'react-router';

export default class Routes extends Component {

  render() {

    return (

            <Switch>
              <Route path={'/about'} component={withRouter(About)} />
              <Route path={'/projects'} component={withRouter(Projects)} />
              <Route path={'/skills'} component={withRouter(Skills)} />
              <Route path={'/contact'} component={withRouter(Contact)} />
              <Route exact path={'/'} component={withRouter(About)} />
            </Switch>

      )
  }
}
