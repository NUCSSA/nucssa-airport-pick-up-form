import React, { Component } from 'react'

import InfoCard from 'src/components/InfoCard'
import FormCard from 'src/components/FormCard'

import { FORM_STUDENT, FORM_DRIVER } from 'src/data/route'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
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
