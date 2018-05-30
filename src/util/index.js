import _ from 'lodash'
import moment from 'moment'
import momentTimezone from 'moment-timezone'

export const buildParamURI = function({ originalURI, paramName, substitutedValue  }) {
  return _.replace(originalURI, paramName, substitutedValue)
}

export const convertTimeToLocaleReadableTime = function(time) {
  if (_.isNil(time)) {
    throw new Error('time cannot be undefined')
  }

  return moment(time).format('dddd, MMMM Do YYYY, h:mm:ss a')
}

export const parseTimeInUSEastTimezone = function(time) {
  if (_.isNil(time)) {
    throw new Error('time cannot be undefined')
  }

  let parsedTime = momentTimezone(time, 'YYYY-MM-DD HH:mm').tz('America/New_York').format()
  if (parsedTime === 'Invalid date') {
    throw new Error(parsedTime)
  }

  return parsedTime
}