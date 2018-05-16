import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavbarBrand } from 'reactstrap'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import { DRIVER_HOME, DRIVER_ORDERS, ORDER_QUERY } from 'src/data/route'

@observer
class DriverNavBar extends Component {
  constructor(props) {
    super(props)
    this.onSignOut = this.onSignOut.bind(this)
  }

  onSignOut() {
    this.props.signOut()
  }

  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand>NUCSSA司机页面</NavbarBrand>
          <Nav navbar>
            <Link to={DRIVER_HOME}>
              <Button className={'pull-right'}>
                Home
              </Button>
            </Link>
          </Nav>
          <Nav navbar>
            <Link to={DRIVER_ORDERS}>
              <Button className={'pull-right'}>
                已接收订单
              </Button>
            </Link>
          </Nav>
          <Nav navbar>
            <Link to={ORDER_QUERY}>
              <Button className={'pull-right'}>
                订单查询
              </Button>
            </Link>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Button className={'pull-right'} bsStyle='danger' onClick={this.onSignOut}>
              Sign out
            </Button>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

DriverNavBar.propTypes = {
  signOut: PropTypes.func.isRequired,
}

export default DriverNavBar