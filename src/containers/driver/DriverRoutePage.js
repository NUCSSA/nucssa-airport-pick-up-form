import { DRIVER_LOGIN, DRIVER_HOME } from 'src/data/route'
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import _ from 'lodash'
import PropTypes from 'prop-types'

import DriverLoginPage from './DriverLoginPage'
import DriverHomePage from './DriverHomePage'
import DriverNavBar from 'src/components/driver/NavBar'

@inject(stores => {
  let { driverStore } = stores
  let { driverId, signOut } = driverStore
  return {
    driverId,
    signOut,
  }
})
@observer
class DriverRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    driverId: PropTypes.string,
    signOut: PropTypes.func,
  }

  render() {
    let { driverId, signOut } = this.props
    if (_.isNil(driverId)) {
      return (
        <Switch>
          <Route path={DRIVER_LOGIN} component={DriverLoginPage}/>
          <Route path={'*'} component={() => <Redirect to={DRIVER_LOGIN}/> } />
        </Switch>
      )
    } else {
      return (
        <div>
          <DriverNavBar signOut={signOut}/>
          <Switch>
            <Route path={DRIVER_HOME} component={DriverHomePage}/>
            <Route path={'*'} component={() => <Redirect to={DRIVER_HOME}/> } />
          </Switch>
        </div>
      )
    }
  }
}

export default DriverRoutePage