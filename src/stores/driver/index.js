import { observable, action } from 'mobx'
import _ from 'lodash'

import { getDriverStatus } from 'src/api/driver'

class Driver {
  @observable driverId = null
  @observable driver = null
  @observable error = null

  @action async setDriverId(driverId) {
    self.error = null
    try {
      let res = await getDriverStatus(driverId)
      let { data } = res
      if (_.isNil(data.error)) {
        self.driver = data
        self.driverId = driverId
      } else {
        self.error = data.error
      }
    } catch (err) {
      self.error = err.message
    }

  }

  @action signOut() {
    self.driverId = null
  }

}

const self = new Driver()

export default self