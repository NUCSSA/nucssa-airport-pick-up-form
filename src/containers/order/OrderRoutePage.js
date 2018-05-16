import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import OrderDetailPage from './OrderDetailPage'
import OrderQueryPage from './OrderQueryPage'
import { ORDER_DETAIL, ORDER_QUERY } from 'src/data/route'

@inject(stores => {
  let { driverStore } = stores
  let { driverId, signOut } = driverStore
  return {
    driverId,
    signOut,
  }
})
@observer
class OrderRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    driverId: PropTypes.string,
    signOut: PropTypes.func,
  }

  render() {
    return (
      <Switch>
        <Route path={ORDER_QUERY} component={OrderQueryPage} />
        <Route path={ORDER_DETAIL} component={OrderDetailPage} />
        <Route path={'*'} component={ () => <Redirect to={ORDER_QUERY}/> } />
      </Switch>
    )
  }
}

export default OrderRoutePage