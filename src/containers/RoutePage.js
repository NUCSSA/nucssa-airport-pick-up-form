import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  ROOT,
  FORM,
  FORM_DRIVER,
  FORM_STUDENT,
  FORM_SUBMISSION_SUCCESS,
  FORM_SUBMISSION_REPEAT,
  DRIVER, ORDER,
} from 'src/data/route'

import FallbackPage  from './FallbackPage'
import HomePage from './HomePage'
import DriverPage from './form/DriverPage'
import StudentPage from './form/StudentPage'
import SuccessPage from './form/SuccessPage'
import RepeatPage from './form/RepeatPage'

import DriverRoutePage from './driver/DriverRoutePage'
import OrderRoutePage from './order/OrderRoutePage'

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
        <Route exact path={FORM_SUBMISSION_SUCCESS} component={SuccessPage}/>
        <Route exact path={FORM_SUBMISSION_REPEAT} component={RepeatPage}/>
        <Route path={FORM} component={FormRouter}/>
        <Route path={DRIVER} component={DriverRoutePage} />
        <Route path={ORDER} component={OrderRoutePage} />
        <Route component={FallbackPage}/>
      </Switch>
    )
  }
}

export default RoutePage