import { axios } from 'src/api/axios'
import _ from 'lodash'

import { buildParamURI } from 'src/util'
const ORDER_URI = 'api/orders'
const NEED_TO_BE_ASSIGNED_STUDENT_SUBMISSIONS = ORDER_URI + '/needToBeAssignedStudentSubmissions'
const CREATE_ORDER = ORDER_URI + '/create'

const PARAMS_STUDENT_WECHAT_ID = ':studentWechatId'
const ORDER_DETAIL = ORDER_URI + '/student/' + PARAMS_STUDENT_WECHAT_ID

const PARAMS_DRIVER_WECHAT_ID = ':driverWechatId'
const DRIVER_ORDERS = ORDER_URI + '/driver/' + PARAMS_DRIVER_WECHAT_ID

const getStudentOrderDetail = function({ studentWechatId }) {
  return buildParamURI({
    originalURI: ORDER_DETAIL,
    paramName: PARAMS_STUDENT_WECHAT_ID,
    substitutedValue: studentWechatId,
  })
}

const getDriverOrders = function({ driverWechatId }) {
  return buildParamURI({
    originalURI: DRIVER_ORDERS,
    paramName: PARAMS_DRIVER_WECHAT_ID,
    substitutedValue: driverWechatId,
  })
}

export const getNeedToBeAssignedStudentSubmissions = async function() {
  return await axios.get(NEED_TO_BE_ASSIGNED_STUDENT_SUBMISSIONS)
}

export const createOrder = async function({ studentWechatId, driverWechatId }) {
  return await axios.post(CREATE_ORDER, {
    studentWechatId,
    driverWechatId,
  })
}

export const getOrder = async function({ studentWechatId }) {
  const uri = getStudentOrderDetail({ studentWechatId })
  return await axios.get(uri)
}

export const getDriverOrder = async function({ driverWechatId }) {
  const uri = getDriverOrders({ driverWechatId })
  return await axios.get(uri)
}