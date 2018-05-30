import _ from 'lodash'
import momentTimezone from 'moment-timezone'

export const buildParamURI = function({ originalURI, paramName, substitutedValue  }) {
  return _.replace(originalURI, paramName, substitutedValue)
}

const timeFormat = 'YYYY-MM-DD HH:mm'


export const convertStandardTimeToUSEast = function(time) {
  if (_.isNil(time)) {
    throw new Error('time cannot be undefined')
  }

  return momentTimezone(time).tz('America/New_York').format(timeFormat)
}

export const parseTimeInUSEastTimezone = function(time) {
  if (_.isNil(time)) {
    throw new Error('time cannot be undefined')
  }

  let parsedTime = momentTimezone.tz(time, timeFormat, 'America/New_York').format()
  if (parsedTime === 'Invalid date') {
    throw new Error(parsedTime)
  }

  return parsedTime
}