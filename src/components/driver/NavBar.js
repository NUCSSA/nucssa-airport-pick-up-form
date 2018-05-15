import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavbarBrand, Button } from 'reactstrap'
import { observer } from 'mobx-react'

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
          <Nav className="ml-auto" navbar>
            <Button className={'pull-right'} onClick={this.onSignOut}>
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