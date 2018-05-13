import React, { Component } from 'react'

import ResponseCard from 'src/components/ResponseCard'

class RepeatPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ResponseCard
        info={'请不要重复提交报名表'}
      />
    )
  }
}

export default RepeatPage
