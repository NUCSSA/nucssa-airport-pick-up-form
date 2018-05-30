import { observable, action, computed } from 'mobx'
import _ from 'lodash'
import moment from 'moment'
import {TIME_FORMAT} from 'src/util'

import {
  getNeedToBeAssignedStudentSubmissions,
  createOrder,
} from 'src/api/order'
import routing from '../routing'
import { PARAMS_STUDENT_WECHAT_ID, ORDER_DETAIL } from 'src/data/route'
import { buildParamURI } from 'src/util'

class Order {
  @observable availableSubmissions = []
  @observable filterBy = {
    start: null,
    end: null,
    luggageNumber: null,
  }
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

  @computed get filteredOrders() {
    const { start, end, luggageNumber } = self.filterBy
    const filtered = _.filter(self.availableSubmissions, (o) => {
      let result = true
      const arrivingTime = moment(o.arrivingTime, TIME_FORMAT)
      if (!_.isNil(start)) {
        result = result && (arrivingTime.isAfter(start))
      }
      if (!_.isNil(end)) {
        result = result && (arrivingTime.isBefore(end))
      }
      if(!_.isNil(luggageNumber)) {
        result = result && (o.luggageNumber === luggageNumber)
      }
      return result
    })
    return filtered
  }

  @action setFilterByStart(dateTime) {
    self.filterBy['start'] = dateTime
  }

  @action setFilterByEnd(dateTime) {
    self.filterBy['end'] = dateTime
  }

  @action setFilterByLuggageNumber(number) {
    self.filterBy['luggageNumber'] = number
  }

}

const self = new Order()

export default self