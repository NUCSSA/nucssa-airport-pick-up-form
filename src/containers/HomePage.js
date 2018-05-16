import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Navbar, Nav, NavbarBrand } from 'reactstrap'

import { Link } from 'react-router-dom'

import InfoCard from 'src/components/InfoCard'
import FormCard from 'src/components/FormCard'

import { FORM_STUDENT, FORM_DRIVER, DRIVER_HOME, ORDER_QUERY } from 'src/data/route'

let HomeNavBar = () => {
  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand>NUCSSA接机</NavbarBrand>
        <Nav navbar>
          <Link to={DRIVER_HOME}>
            <Button className={'pull-right'}>
              司机登陆
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
        </Nav>
      </Navbar>
    </div>
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
