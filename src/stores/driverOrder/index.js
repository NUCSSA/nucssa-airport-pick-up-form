import { observable, action, computed } from 'mobx'
import _ from 'lodash'

import { getDriverOrder, completeOrder } from 'src/api/order'

const ORDER_STATUS = {
  BEFORE: 'BEFORE',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
}

class Order {
  @observable driverOrders = []
  @observable error = null

  @action async getDriverOrders({ driverWechatId }) {
    self.error = null
    try {
      let res = await getDriverOrder({ driverWechatId })
      self.driverOrders = res.data
    } catch (err) {
      self.driverOrders = []
      self.error = err.message
      console.log(err)
    }
  }

  @computed get driverCompleteOrders() {
    const orders =  _.filter(self.driverOrders, (o)=>{
      return o.status === ORDER_STATUS.DONE
    })
    return orders
  }

  @computed get driverIncompleteOrders() {
    const orders =  _.filter(self.driverOrders, (o)=> {
      return o.status !== ORDER_STATUS.DONE
    })
    return orders
  }

  @action async completeOrder({ studentWechatId }) {
    self.error = null
    try {
      await completeOrder({ studentWechatId })
      const removedOrder = self.driverOrders.find((o) => {
        return o.studentWechatId === studentWechatId
      })
      removedOrder.status = ORDER_STATUS.DONE
    } catch (err) {
      self.error = err.message
      self.driverOrders = []
    }
  }

}

const self = new Order()

export default self