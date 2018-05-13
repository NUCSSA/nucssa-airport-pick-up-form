import React, { Component } from 'react'

import ResponseCard from 'src/components/ResponseCard'

class SuccessPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ResponseCard
        info={'报名表提交成功'}
      />
    )
  }
}

export default SuccessPage
