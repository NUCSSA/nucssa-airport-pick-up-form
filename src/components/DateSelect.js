import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import PropTypes from 'prop-types'

import 'react-datepicker/dist/react-datepicker.css'
import 'src/styles/DateSelect.css'

class DateSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment(),
    }
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date,
    })
    this.props.onChangeStart(date)
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    })
    this.props.onChangeEnd(date)
  }

  render() {
    let { startDate, endDate } = this.state
    let { className } = this.props
    return <div className={className}>
      <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={this.handleChangeStart}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="LLL"
      />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        onChange={this.handleChangeEnd}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="LLL"
      />
    </div>
  }
}

DateSelect.propTypes = {
  className: PropTypes.string.isRequired,
  onChangeStart: PropTypes.func.isRequired,
  onChangeEnd: PropTypes.func.isRequired,
}

export default DateSelect