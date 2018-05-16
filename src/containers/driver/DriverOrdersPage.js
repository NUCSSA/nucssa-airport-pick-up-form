import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

import StudentSubmission from 'src/components/student/StudentSubmission'

@inject(stores => {
  let { driverStore, driverOrderStore } = stores
  let { driver, driverId } = driverStore
  let { getDriverOrders, driverOrders } = driverOrderStore

  return {
    driver,
    driverId,
    getDriverOrders,
    driverOrders,
  }
})
@observer
class DriverOrdersPage extends Component {
  constructor(props) {
    super(props)
    this.renderSubmissions = this.renderSubmissions.bind(this)
  }

  static propTypes = {
    driver: MobxPropTypes.observableObject,
    driverId: PropTypes.string,
    getDriverOrders: PropTypes.func,
    driverOrders: MobxPropTypes.observableArray,
  }

  componentWillMount() {
    let { getDriverOrders, driverId } = this.props
    getDriverOrders({ driverWechatId: driverId })
  }

  renderSubmissions() {
    let { driverOrders } = this.props

    return _.map(driverOrders, (o) => {
      return (
        <div key={o.studentWechatId}>
          <StudentSubmission studentSubmission={o.student}/>
        </div>
      )
    })
  }

  render() {
    let { driver } = this.props
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>司机已接收订单页</h3>
          <h3 className='display-5'>您好，{driver.name}</h3>
        </Jumbotron>
        <h2>已接收订单</h2>
        {this.renderSubmissions()}
      </div>
    )
  }
}

export default DriverOrdersPage
