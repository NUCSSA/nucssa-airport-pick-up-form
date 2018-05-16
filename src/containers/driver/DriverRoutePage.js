import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import _ from 'lodash'
import PropTypes from 'prop-types'

import DriverLoginPage from './DriverLoginPage'
import DriverHomePage from './DriverHomePage'
import DriverOrdersPage from './DriverOrdersPage'
import DriverNavBar from 'src/components/driver/NavBar'
import { DRIVER_LOGIN, DRIVER_HOME, DRIVER_ORDERS } from 'src/data/route'

@inject(stores => {
  let { driverStore } = stores
  let { driverId, signOut, loadingDriverInfo } = driverStore
  return {
    driverId,
    signOut,
    loadingDriverInfo,
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
    loadingDriverInfo: PropTypes.bool,
  }

  render() {
    let { driverId, signOut, loadingDriverInfo } = this.props
    if (loadingDriverInfo === true) {
      return (
        <h1>Loading</h1>
      )
    }

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
            <Route path={DRIVER_ORDERS} component={DriverOrdersPage}/>
            <Route path={'*'} component={() => <Redirect to={DRIVER_HOME}/> } />
          </Switch>
        </div>
      )
    }
  }
}

export default DriverRoutePage