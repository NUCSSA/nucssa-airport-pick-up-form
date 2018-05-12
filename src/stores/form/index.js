import { observable, action } from 'mobx'

import { postDriverForm, postStudentForm } from 'src/api/form/submission'

const initFormData = {}

class Form {
  @observable formData = initFormData

  @action reset() {
    self.schema = initFormData
  }

  @action submitDriverForm(form) {
    postDriverForm(form)
  }

  @action submitStudentForm(form) {
    postStudentForm(form)
  }


}

const self = new Form()

export default self