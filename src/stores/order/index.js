import { observable, action } from 'mobx'
import _ from 'lodash'

import { getNeedToBeAssignedStudentSubmissions } from 'src/api/order'

class Order {
  @observable availableSubmissions = []
  @observable error = null

  @action async getAvailableSubmissions() {
    self.error = null
    try {
      let res = await getNeedToBeAssignedStudentSubmissions()
      self.availableSubmissions = res.data
    } catch (err) {
      self.error = err.message
      console.log(err)
    }
  }

}

const self = new Order()

export default self