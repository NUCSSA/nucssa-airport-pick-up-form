import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap'

import { ROOT } from 'src/data/route'

class SuccessPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h2 className='display-4'>报名表提交成功</h2>
          <p className='lead'>
            <Link to={ROOT}>
              <Button color={'primary'}>
                返回主页面
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default SuccessPage
