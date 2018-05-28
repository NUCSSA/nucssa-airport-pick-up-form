import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'
import { studentFormData } from 'src/data/form'
import {inject, observer} from 'mobx-react'
import PropTypes from 'prop-types'


@inject(stores => {
  let { formStore } = stores
  return {
    submitStudentForm: formStore.submitStudentForm,
  }
})
@observer
class StudentPage extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    submitStudentForm: PropTypes.func,
  }

  onSubmit({ formData }) {
    this.props.submitStudentForm(formData)
  }

  render() {
    return (
      <div>
        <h2 style={{color: '#FF0000'}}>***因为司机的数量有限，您的订单有可能不被受理***</h2>
        <JsonSchemaForm
          schema={studentFormData.JsonSchema}
          uiSchema={studentFormData.UISchema}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default StudentPage
