import _ from 'lodash'
import momentTimezone from 'moment-timezone'

export const buildParamURI = function({ originalURI, paramName, substitutedValue  }) {
  return _.replace(originalURI, paramName, substitutedValue)
}

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm'
const REGION = 'America/New_York'

export const convertStandardTimeToUSEast = function(time) {
  if (_.isNil(time)) {
    throw new Error('time cannot be undefined')
  }

  return momentTimezone.tz(time, TIME_FORMAT, REGION).format()
}

export const parseTimeInUSEastTimezone = function(time) {
  if (_.isNil(time)) {
    throw new Error('time cannot be undefined')
  }

  let parsedTime = momentTimezone.tz(time, TIME_FORMAT, REGION).format()
  if (parsedTime === 'Invalid date') {
    throw new Error(parsedTime)
  }

  return parsedTime
}