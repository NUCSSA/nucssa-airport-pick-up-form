import { observable, action } from 'mobx'

import { getDriverOrder } from 'src/api/order'

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

}

const self = new Order()

export default self