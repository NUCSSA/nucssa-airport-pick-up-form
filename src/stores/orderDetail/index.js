import { observable, action } from 'mobx'

import { getOrder } from 'src/api/order'


class OrderDetail {
  @observable orderDetail = null
  @observable studentSubmission = null
  @observable loading = false
  @observable error = null

  @action async getOrder({ studentWechatId }) {
    try {
      self.loading = true
      let res = await getOrder({ studentWechatId })
      self.orderDetail = res.data
    } catch (err) {
      self.orderDetail = null
      self.error = err.message
      console.log(self.error)
    }
    self.loading = false
  }

}

const self = new OrderDetail()

export default self