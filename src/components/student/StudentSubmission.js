import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

@observer
class StudentSubmission extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {
      wechatId,
      studentSet,
      arrivingTime,
      flightNumber,
      address,
      luggageNumber,
      remark,
    } = this.props.studentSubmission
    return (
      <div>
        <ListGroup>
          <ListGroupItem>主要负责人微信: { wechatId }</ListGroupItem>
          <ListGroupItem>接机人数: { studentSet.length }</ListGroupItem>
          <ListGroupItem>到达时间: { arrivingTime }</ListGroupItem>
          <ListGroupItem>航班号: { flightNumber }</ListGroupItem>
          <ListGroupItem>地址: { address }</ListGroupItem>
          <ListGroupItem>行李箱总数: { luggageNumber }</ListGroupItem>
          {
            remark && <ListGroupItem>备注: { remark }</ListGroupItem>
          }
        </ListGroup>
      </div>
    )
  }
}

StudentSubmission.propTypes = {
  studentSubmission: PropTypes.shape({
    wechatId: PropTypes.string.isRequired,
    studentSet: PropTypes.array.isRequired,
    arrivingTime: PropTypes.string.isRequired,
    flightNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    luggageNumber: PropTypes.string.isRequired,
    remark: PropTypes.string,
  }).isRequired,
}

export default StudentSubmission