import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import PropTypes from 'prop-types'
import _ from 'lodash'

import 'react-datepicker/dist/react-datepicker.css'

class SingleSelectionDropDown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      select: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(option) {
    this.setState({
      select: option,
    })
    if (_.isNil(option)) {
      this.props.onChange(option)
    } else {
      this.props.onChange(option.value)
    }
  }

  render() {
    let { options, className } = this.props
    let { select } = this.state
    return <div className={className}>
      <Select
        name="form-field-name"
        value={select}
        options={options}
        onChange={this.handleChange}
        clearable={true}
      />
    </div>
  }
}

SingleSelectionDropDown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  className: PropTypes.string,
}

export default SingleSelectionDropDown