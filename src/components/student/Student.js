import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

@observer
class Student extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {
      name,
      nuid,
      degree,
      email,
      wechatId,
      phone,
    } = this.props.student
    return (
      <div>
        <ListGroup>
          <ListGroupItem>姓名: { name }</ListGroupItem>
          <ListGroupItem>NUID: { nuid }</ListGroupItem>
          <ListGroupItem>就读项目: { degree }</ListGroupItem>
          <ListGroupItem>邮箱: { email }</ListGroupItem>
          <ListGroupItem>微信: { wechatId }</ListGroupItem>
          <ListGroupItem>电话: { phone }</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

Student.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nuid: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    wechatId: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

export default Student