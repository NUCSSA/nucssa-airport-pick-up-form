import { axios } from 'src/api/axios'

const DRIVER_URI = 'api/drivers/'

export const getDriverStatus = async function(driverWechatId) {
  return await axios.get(DRIVER_URI + driverWechatId)
}
