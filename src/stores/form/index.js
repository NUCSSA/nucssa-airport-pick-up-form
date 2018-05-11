import { observable, action } from 'mobx'

import submit from 'src/api/form/submission'

const initFormData = {}

class Form {
  @observable formData = initFormData

  @action reset() {
    self.schema = initFormData
  }

  @action submit(form) {
    console.log('mobx', form)
    submit(form, 'driverForm')
  }


}

const self = new Form()

export default self