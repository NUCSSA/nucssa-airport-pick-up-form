import Cookies from 'universal-cookie'
import _ from 'lodash'

const cookies = new Cookies()

const DRIVER_ID = 'driver-id'

export const getDriverId = () => {
  return cookies.get(DRIVER_ID)
}

export const setDriverId = ({ driverId }) => {
  if (_.isNil(driverId)) {
    cookies.remove(DRIVER_ID)
  } else {
    cookies.set(DRIVER_ID, driverId)
  }
}