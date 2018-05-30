import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'
import _ from 'lodash'

import StudentSubmission from 'src/components/student/StudentSubmission'
import CompleteOrderButton from 'src/components/order/CompleteOrderButton'

@inject(stores => {
  let { driverStore, driverOrderStore } = stores
  let { driver, driverId } = driverStore
  let { getDriverOrders, driverCompleteOrders, driverIncompleteOrders, completeOrder } = driverOrderStore

  return {
    driver,
    driverId,
    completeOrder,
    getDriverOrders,
    driverCompleteOrders,
    driverIncompleteOrders,
  }
})
@observer
class DriverOrdersPage extends Component {
  constructor(props) {
    super(props)
    this.renderIncompleteSubmissions = this.renderIncompleteSubmissions.bind(this)
    this.renderCompleteSubmissions = this.renderCompleteSubmissions.bind(this)
  }

  static propTypes = {
    driver: MobxPropTypes.observableObject,
    driverId: PropTypes.string,
    getDriverOrders: PropTypes.func,
    driverCompleteOrders: PropTypes.array,
    driverIncompleteOrders: PropTypes.array,
    completeOrder: PropTypes.func.isRequired,
  }

  componentWillMount() {
    let { getDriverOrders, driverId } = this.props
    getDriverOrders({ driverWechatId: driverId })
  }

  renderCompleteSubmissions() {
    let { driverCompleteOrders } = this.props
    return _.map(driverCompleteOrders, (o) => {
      return (
        <div key={o.studentWechatId}>
          <StudentSubmission studentSubmission={o.student}/>
        </div>
      )
    })
  }

  renderIncompleteSubmissions() {
    let { driverIncompleteOrders, completeOrder } = this.props

    return _.map(driverIncompleteOrders, (o) => {
      return (
        <div key={o.studentWechatId}>
          <CompleteOrderButton
            studentWechatId={o.studentWechatId}
            completeOrder={completeOrder}/>
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
          <h3 className='display-4'>司机订单页</h3>
          <h3 className='display-5'>您好，{driver.name}</h3>
        </Jumbotron>

        <Tabs defaultActiveKey='incompleted' id='driver-orders'>
          <Tab eventKey='incompleted' title='已接收订单'>
            {this.renderIncompleteSubmissions()}
          </Tab>
          <Tab eventKey='completed' title='已完成订单'>
            {this.renderCompleteSubmissions()}
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default DriverOrdersPage
