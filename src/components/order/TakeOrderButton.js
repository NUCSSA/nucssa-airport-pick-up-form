import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Button } from 'react-bootstrap'
import alertify from 'alertify.js'


@observer
class TakeOrderButton extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    alertify
      .okBtn('确认')
      .cancelBtn('取消')
      .confirm('您确定要接收这笔订单吗？', () => {
        // user clicked "ok"
        this.props.takeOrder()
      })
  }
  
  render() {
    return (
      <div>
        <Button bsStyle="info" onClick={this.onClick}>接单</Button>
      </div>
    )
  }
}

TakeOrderButton.propTypes = {
  takeOrder: PropTypes.func.isRequired,
}

export default TakeOrderButton