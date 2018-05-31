import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { ADMIN_WECHAT_ACCOUNT } from 'src/data/admin'

import DriverSubmission from 'src/components/driver/DriverSubmission'
import StudentSubmission from 'src/components/student/StudentSubmission'
import {ROOT} from 'src/data/route'
import { ORDER_STATUS } from 'src/data/order/index'

@inject(stores => {
  let { driverStore, orderDetailStore } = stores
  let { driver, driverId } = driverStore
  let { getOrder, orderDetail, error, loading } = orderDetailStore

  return {
    driver,
    driverId,
    getOrder,
    orderDetail,
    error,
    loading,
  }
})
@observer
class OrderDetailPage extends Component {
  constructor(props) {
    super(props)
    this.renderOrderDetail = this.renderOrderDetail.bind(this)
  }

  static propTypes = {
    driver: MobxPropTypes.observableObject,
    driverId: PropTypes.string,
    getOrder: PropTypes.func,
    orderDetail: MobxPropTypes.observableObject,
    match: PropTypes.object,
    loading: PropTypes.bool,
  }

  componentWillMount() {
    let { studentWechatId } = this.props.match.params
    this.props.getOrder({ studentWechatId })
  }

  renderOrderDetail() {
    let { orderDetail, loading } = this.props

    if (loading === true) {
      return (<h3>Loading</h3>)
    }

    if (_.isNil(orderDetail)) {
      return (<h3>您所查看的订单不存在，如有疑问请询问NUCSSA管理员，管理员微信：{ADMIN_WECHAT_ACCOUNT}</h3>)
    }
    let { student, driver } = orderDetail

    if (_.isNil(driver)) {
      return (
        <div>
          <h3>您所查看的订单尚未有司机接单，如有疑问请询问NUCSSA管理员，管理员微信：{ADMIN_WECHAT_ACCOUNT}</h3>
          <h3>学生信息</h3>
          <StudentSubmission studentSubmission={student}/>
        </div>
      )
    }

    return (
      <div>
        <h3>订单状态</h3>
        {orderDetail.status === ORDER_STATUS.DONE ? <p>已完成</p> : <p>正在进行</p>}
        <h3>司机信息</h3>
        <DriverSubmission driverSubmission={driver}/>
        <h3>学生信息</h3>
        <StudentSubmission studentSubmission={student}/>
      </div>
    )

  }

  render() {

    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>订单页</h3>
          <h4 className={'display-5'}>当订单完成后，请联系NUCSSA管理员结束订单</h4>
          <h4 className='display-5'>如需取消订单，请联系NUCSSA管理员取消订单</h4>
          <h4 className='display-5'>管理员微信：{ADMIN_WECHAT_ACCOUNT}</h4>
          <Link to={ROOT}>
            <Button color={'primary'}>
              返回主页面
            </Button>
          </Link>
        </Jumbotron>
        {this.renderOrderDetail()}

      </div>
    )
  }
}

export default OrderDetailPage
