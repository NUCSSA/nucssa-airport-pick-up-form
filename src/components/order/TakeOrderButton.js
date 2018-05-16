import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Button } from 'react-bootstrap'


@observer
class TakeOrderButton extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.props.takeOrder()
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