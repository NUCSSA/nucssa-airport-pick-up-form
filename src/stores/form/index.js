import { observable, action } from 'mobx'

import { postDriverForm, postStudentForm } from 'src/api/form/submission'
import { SUBMISSION_SUCCESS } from 'src/data/route'

const initFormData = {}

class Form {
  @observable formData = initFormData

  @action reset() {
    self.schema = initFormData
  }

  @action async submitDriverForm(form) {
    const res = await postDriverForm(form)
    if (res.status === 200) {
      this.history.push(SUBMISSION_SUCCESS)
    }
  }

  @action async submitStudentForm(form) {
    const res = await postStudentForm(form)
    if (res.status === 200) {
      this.history.push(SUBMISSION_SUCCESS)
    }
  }


}

const self = new Form()

export default self