import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap'
import { ROOT } from 'src/data/route'

class ResponseCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info } = this.props

    return (
      <div>
        <Jumbotron>
          <h2 className='display-4'>{info}</h2>
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

ResponseCard.propTypes = {
  info: PropTypes.string.isRequired,
}

export default ResponseCard