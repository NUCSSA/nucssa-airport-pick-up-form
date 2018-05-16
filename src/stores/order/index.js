import { observable, action } from 'mobx'
import _ from 'lodash'

import { getNeedToBeAssignedStudentSubmissions, createOrder } from 'src/api/order'
import routing from '../routing'
import { PARAMS_STUDENT_WECHAT_ID, ORDER_DETAIL } from 'src/data/route'
import { buildParamURI } from 'src/util'

class Order {
  @observable availableSubmissions = []
  @observable orderDetail = null
  @observable error = null

  @action async getAvailableSubmissions() {
    self.error = null
    try {
      let res = await getNeedToBeAssignedStudentSubmissions()
      self.availableSubmissions = res.data
    } catch (err) {
      self.availableSubmissions = []
      self.error = err.message
      console.log(err)
    }
  }

  @action redirectTo({ studentWechatId }) {
    let redirectedURI = buildParamURI({
      originalURI: ORDER_DETAIL,
      paramName: PARAMS_STUDENT_WECHAT_ID,
      substitutedValue: studentWechatId,
    })
    routing.history.push(redirectedURI)
  }

  @action async createOrder({ studentWechatId, driverWechatId }) {
    try {
      await createOrder({
        studentWechatId,
        driverWechatId,
      })

      self.redirectTo({ studentWechatId })
    } catch (err) {
      self.error = err.message
      console.log(err)
    }
  }

}

const self = new Order()

export default self