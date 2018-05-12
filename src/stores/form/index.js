import { observable, action } from 'mobx'

import { postSubmitForm } from 'src/api/form/submission'

const initFormData = {}

class Form {
  @observable formData = initFormData

  @action reset() {
    self.schema = initFormData
  }

  @action submit(form) {
    postSubmitForm(form, 'driverForm')
  }


}

const self = new Form()

export default self