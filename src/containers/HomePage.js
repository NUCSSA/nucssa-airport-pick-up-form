import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import InfoCard from 'src/components/InfoCard'
import FormCard from 'src/components/FormCard'

import { FORM_STUDENT, FORM_DRIVER } from 'src/data/route'
import { DRIVER_HOME, ORDER_QUERY } from 'src/data/route'

let HomeNavBar = () => {
  return (
    <Navbar>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to={DRIVER_HOME}>
            <Button>
              司机登陆
            </Button>
          </Link>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2}>
          <Link to={ORDER_QUERY}>
            <Button>
              接机订单状态查询
            </Button>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <HomeNavBar/>
        <InfoCard/>
        <FormCard
          title={'学生入口'}
          description={'接机活动仅限NEU新生'}
          link={FORM_STUDENT}
        />
        <br/>
        <FormCard
          title={'司机入口'}
          description={'请如实填报个人信息'}
          link={FORM_DRIVER}
        />
      </div>
    )
  }
}

export default HomePage
