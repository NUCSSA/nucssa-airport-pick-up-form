import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { observer } from 'mobx-react'

@observer
class InfoCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h2 className='display-4'>NUCSSA接机活动报名入口</h2>
          <p className='lead'>接机活动将从每年6月持续进行到8月底</p>
        </Jumbotron>
      </div>
    )
  }
}
export default InfoCard