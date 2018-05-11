import { observable, action } from 'mobx'

const initFormData = {}

class Form {
  @observable formData = initFormData

  @action reset() {
    self.schema = initFormData
  }

  @action submit(form) {
    console.log('mobx', form)
  }


}

const self = new Form()

export default self