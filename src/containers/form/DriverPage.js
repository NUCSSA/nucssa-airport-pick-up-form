import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'
import driverFormData from 'src/data/form/driver'

class DriverPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <JsonSchemaForm
          schema={driverFormData.JsonSchema}
          uiSchema={driverFormData.UISchema}
        />
      </div>
    )
  }
}

export default DriverPage
