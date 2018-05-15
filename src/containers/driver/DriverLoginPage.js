import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Alert } from 'react-bootstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

@inject(stores => {
  let { driverStore } = stores
  let { setDriverId, error } = driverStore
  return {
    setDriverId,
    error,
  }
})
@observer
class DriverLoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wechatId: '',
    }
    this.handleWechatIdChange = this.handleWechatIdChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  static propTypes = {
    setDriverId: PropTypes.func,
    error: PropTypes.string,
  }

  handleWechatIdChange(e) {
    this.setState({
      wechatId: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.setDriverId(this.state.wechatId)
  }

  renderError() {
    if (!_.isNil(this.props.error)) {
      return (
        <div>
          <Alert bsStyle='danger'>
            {this.props.error}
          </Alert>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h2 className='display-4'>NUCSSA接机活动</h2>
          <h3 className='display-5'>司机登陆</h3>
          {this.renderError()}
          <br/>
          <Form>
            <FormGroup>
              <Label for="wechatId"><h4>微信ID</h4></Label>
              <Input
                type="text"
                id="wechatId"
                placeholder="此项您报名时所填写的微信ID"
                onChange={this.handleWechatIdChange}
              />
            </FormGroup>
            <Button color={'primary'} type={'submit'} onClick={this.onSubmit}>登陆</Button>
          </Form>
        </Jumbotron>
      </div>
    )
  }
}

export default DriverLoginPage
