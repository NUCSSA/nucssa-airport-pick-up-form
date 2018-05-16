import { observable, action } from 'mobx'
import _ from 'lodash'

import { getDriverStatus } from 'src/api/driver'
import { getDriverId, setDriverId } from 'src/util/cookies'

const getDriver = async function(driverId) {
  if (!_.isNil(driverId)) {
    try {
      let res = await getDriverStatus(driverId)
      let { data } = res
      if (_.isNil(data.error)) {
        return data
      } else {
        return null
      }
    } catch (e) {
      return null
    }
  }
  return null
}

class Driver {
  @observable loadingDriverInfo = true
  @observable driverId = null
  @observable driver = null
  @observable error = null

  constructor() {
    let driverId = getDriverId()
    if(!_.isNil(driverId)) {
      this.getDriver(driverId)
    } else {
      this.loadingDriverInfo = false
    }
  }

  @action async getDriver(driverId) {
    try {
      let res = await getDriverStatus(driverId)
      let { data } = res

      if (_.isNil(data.error)) {
        self.driver = data
        self.driverId = driverId
      } else {
        self.driverId = null
      }
    } catch (err) {
      self.driverId = null
    }
    self.loadingDriverInfo = false
  }

  @action async setDriverId(driverId) {
    self.error = null
    try {
      let res = await getDriverStatus(driverId)
      let { data } = res
      if (_.isNil(data.error)) {
        self.driver = data
        self.driverId = driverId
        setDriverId({
          driverId,
        })
      } else {
        self.error = data.error
      }
    } catch (err) {
      self.error = err.message
    }

  }

  @action signOut() {
    self.driverId = null
    setDriverId({
      driverId: null,
    })
  }

}

const self = new Driver()



export default self