import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  ROOT,
  FORM,
  FORM_DRIVER,
  FORM_STUDENT,
  SUBMISSION_SUCCESS,
} from 'src/data/route'

import FallbackPage  from './FallbackPage'
import HomePage from './HomePage'
import DriverPage from './form/DriverPage'
import StudentPage from './form/StudentPage'
import SuccessPage from './SuccessPage'

const FormRouter = () => (
  <Switch>
    <Route path={FORM_DRIVER} component={DriverPage}/>
    <Route path={FORM_STUDENT} component={StudentPage}/>
  </Switch>
)


class RoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path={ROOT} component={HomePage}/>
        <Route exact path={SUBMISSION_SUCCESS} component={SuccessPage}/>
        <Route path={FORM} component={FormRouter}/>
        <Route component={FallbackPage}/>
      </Switch>
    )
  }
}

export default RoutePage