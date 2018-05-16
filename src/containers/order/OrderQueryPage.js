import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { ADMIN_WECHAT_ACCOUNT } from 'src/data/admin'


@inject(stores => {
  let { orderStore } = stores
  let { redirectTo } = orderStore

  return {
    redirectTo,
  }
})
@observer
class OrderQueryPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentWechatId: '',
    }

    this.renderQueryPage = this.renderQueryPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes = {
    redirectTo: PropTypes.func,
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      studentWechatId: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let { studentWechatId } = this.state

    this.props.redirectTo({ studentWechatId })
  }

  renderQueryPage() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="queryText"
        >
          <ControlLabel>请输入订单主要负责人微信ID</ControlLabel>
          <FormControl
            type="text"
            value={this.state.studentWechatId}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button bsStyle="info" type="submit" block>搜索</Button>
      </form>
    )
  }

  render() {

    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>订单查询页</h3>
          <h4 className={'display-5'}>您有任何疑问，请联系NUCSSA管理员</h4>
          <h4 className='display-5'>管理员微信：{ADMIN_WECHAT_ACCOUNT}</h4>
        </Jumbotron>
        {this.renderQueryPage()}

      </div>
    )
  }
}

export default OrderQueryPage
