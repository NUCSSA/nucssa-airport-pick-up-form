import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Button } from 'react-bootstrap'
import alertify from '../../../node_modules/alertify.js/dist/js/alertify'


@observer
class CompleteOrderButton extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    const { completeOrder, studentWechatId } = this.props
    alertify
      .okBtn('确认')
      .cancelBtn('取消')
      .confirm('您确定订单已完成吗？', () => {
      // user clicked "ok"
        completeOrder({ studentWechatId })
      })
  }

  render() {
    return (
      <div>
        <Button bsStyle="info" onClick={this.onClick}>完成</Button>
      </div>
    )
  }
}

CompleteOrderButton.propTypes = {
  completeOrder: PropTypes.func.isRequired,
  studentWechatId: PropTypes.string.isRequired,
}

export default CompleteOrderButton