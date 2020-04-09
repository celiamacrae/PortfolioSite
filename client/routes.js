import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router';
import {About, Projects, Skills, Contact, Experience} from './Components'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={'/about'} component={withRouter(About)} />
        <Route path={'/projects'} component={withRouter(Projects)} />
        <Route path={'/skills'} component={withRouter(Skills)} />
        <Route path={'/contact'} component={withRouter(Contact)} />
        <Route path={'/education_and_experience'} component={withRouter(Experience)} />
        <Route exact path={'/'} component={withRouter(About)} />
      </Switch>
    )
  }
}
