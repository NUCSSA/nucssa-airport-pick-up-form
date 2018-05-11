import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'
import studentFormData from 'src/data/form/driver'

class StudentPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <JsonSchemaForm
          schema={studentFormData.JsonSchema}
          uiSchema={studentFormData.UISchema}
        />
      </div>
    )
  }
}

export default StudentPage
