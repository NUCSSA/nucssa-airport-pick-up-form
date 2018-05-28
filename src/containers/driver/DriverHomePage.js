import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

import StudentSubmission from 'src/components/student/StudentSubmission'
import TakeOrderButton from 'src/components/order/TakeOrderButton'
import DateSelect from 'src/components/DateSelect'
import SingleSelectionDropDown from 'src/components/SingleSelectionDropDown'
import { luggageOptions } from 'src/data/form'
import 'src/styles/Orders.css'

@inject(stores => {
  let { driverStore, orderStore } = stores
  let { driver, driverId } = driverStore
  let {
    getAvailableSubmissions,
    availableSubmissions,
    createOrder,
    filteredOrders,
    setFilterByStart,
    setFilterByEnd,
    setFilterByLuggageNumber,
  } = orderStore

  return {
    driver,
    driverId,
    getAvailableSubmissions,
    availableSubmissions,
    createOrder,
    filteredOrders,
    setFilterByStart,
    setFilterByEnd,
    setFilterByLuggageNumber,
  }
})
@observer
class DriverHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wechatId: '',
    }
    this.handleWechatIdChange = this.handleWechatIdChange.bind(this)
    this.renderSubmissions = this.renderSubmissions.bind(this)
  }

  static propTypes = {
    driver: MobxPropTypes.observableObject,
    driverId: PropTypes.string,
    getAvailableSubmissions: PropTypes.func,
    availableSubmissions: MobxPropTypes.observableArray,
    createOrder: PropTypes.func,
    filteredOrders: PropTypes.array,
    setFilterByStart: PropTypes.func,
    setFilterByEnd: PropTypes.func,
    setFilterByLuggageNumber: PropTypes.func,
  }

  componentWillMount() {
    this.props.getAvailableSubmissions()
  }

  handleWechatIdChange(e) {
    this.setState({
      wechatId: e.target.value,
    })
  }

  renderSubmissions() {
    let { filteredOrders, createOrder, driverId } = this.props

    return _.map(filteredOrders, (s) => {
      let takeOrder = () => {
        createOrder({
          studentWechatId: s.wechatId,
          driverWechatId: driverId,
        })
      }
      return (
        <div key={s.wechatId}>
          <TakeOrderButton takeOrder={takeOrder}/>
          <StudentSubmission studentSubmission={s}/>
        </div>
      )
    })
  }

  render() {
    let { driver, setFilterByStart, setFilterByEnd, setFilterByLuggageNumber } = this.props
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>司机Home页</h3>
          <h3 className='display-5'>您好，{driver.name}</h3>
        </Jumbotron>
        <h2>可接收订单</h2>
        <div className='filterBy'>
          <DateSelect
            className='filterByDate'
            onChangeStart={setFilterByStart}
            onChangeEnd={setFilterByEnd}
          />
          <SingleSelectionDropDown
            className='filterByLuggageNumber'
            onChange={setFilterByLuggageNumber}
            options={luggageOptions}
          />
        </div>
        {this.renderSubmissions()}
      </div>
    )
  }
}

export default DriverHomePage
