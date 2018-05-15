import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

import StudentSubmission from 'src/components/student/StudentSubmission'

@inject(stores => {
  let { driverStore, orderStore } = stores
  let { driver, driverId } = driverStore
  let { getAvailableSubmissions, availableSubmissions } = orderStore
  return {
    driver,
    driverId,
    getAvailableSubmissions,
    availableSubmissions,
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
    driver: PropTypes.object,
    getAvailableSubmissions: PropTypes.func,
    availableSubmissions: PropTypes.array,
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
    return _.map(this.props.availableSubmissions, (s) => {
      return (
        <div key={s.wechatId}>
          <StudentSubmission studentSubmission={s}/>
        </div>
      )
    })
  }

  render() {
    let { driver } = this.props
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>司机Home页</h3>
          <h3 className='display-5'>你好，{driver.name}</h3>
        </Jumbotron>
        {this.renderSubmissions()}
      </div>
    )
  }
}

export default DriverHomePage
