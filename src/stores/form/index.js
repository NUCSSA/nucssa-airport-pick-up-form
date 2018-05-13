import { observable, action } from 'mobx'

import { postDriverForm, postStudentForm } from 'src/api/form/submission'
import { FORM_SUBMISSION_SUCCESS } from 'src/data/route'
import routing from '../routing'

const initFormData = {}

const redirectToSuccessPage = function(res) {
  if (res.status === 200) {
    routing.history.push(FORM_SUBMISSION_SUCCESS)
  }
}

class Form {
  @observable formData = initFormData

  @action reset() {
    self.schema = initFormData
  }

  @action async submitDriverForm(form) {
    const res = await postDriverForm(form)
    redirectToSuccessPage(res)
  }

  @action async submitStudentForm(form) {
    const res = await postStudentForm(form)
    redirectToSuccessPage(res)
  }

}

const self = new Form()

export default self