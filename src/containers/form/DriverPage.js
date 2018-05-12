import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'
import PropTypes from 'prop-types'

import { driverFormData } from 'src/data/form'

@inject(stores => {
  let { form } = stores
  return {
    submitDriverForm: form.submitDriverForm,
  }
})
@observer
class DriverPage extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    submitDriverForm: PropTypes.func,
  }

  onSubmit({ formData }) {
    this.props.submitDriverForm(formData)
  }

  render() {
    return (
      <div>
        <JsonSchemaForm
          schema={driverFormData.JsonSchema}
          uiSchema={driverFormData.UISchema}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default DriverPage
