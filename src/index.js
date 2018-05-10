import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Form from 'react-jsonschema-form'

import stores from './stores'
import studentFormData from './data/form/student'
import driverFormData from './data/form/driver'

// import configureStore from './redux/store/configureStore';
// import IndexContainer from './containers';
//
// const store = configureStore();

ReactDOM.render(
  <Provider {...stores}>
    <div>
      <Form
        schema={studentFormData.JsonSchema}
        uiSchema={studentFormData.UISchema}
      />
    </div>
  </Provider>
  , document.getElementById('aa3c5543-edfc-4ed6-9538-1f9d4a7c946a'))
