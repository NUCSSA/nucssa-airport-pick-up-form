import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'
import PropTypes from 'prop-types'

import { driverFormData } from 'src/data/form'

@inject(stores => {
  let { formStore } = stores
  const { submitDriverForm, error } = formStore
  return {
    submitDriverForm,
    error,
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
    error: PropTypes.string,
  }

  onSubmit({ formData }) {
    this.props.submitDriverForm(formData)
  }

  render() {
    const { error } = this.props
    return (
      <div>
        { error !== null && <h1 style={{color: '#FF0000'}}>{error}</h1> }
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
