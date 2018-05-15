import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

@observer
class Order extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

Order.propTypes = {
  order: PropTypes.object.isRequired,
}

export default Order