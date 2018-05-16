import { observable, action } from 'mobx'

import { postDriverForm, postStudentForm } from 'src/api/form/submission'
import { FORM_SUBMISSION_SUCCESS, FORM_SUBMISSION_REPEAT } from 'src/data/route'
import routing from '../routing'

const initFormData = {}

const redirectToSuccessPage = function(res) {
  if (res.status === 200) {
    routing.history.push(FORM_SUBMISSION_SUCCESS)
  }
}

const redirectToRepeatPage = function() {
  routing.history.push(FORM_SUBMISSION_REPEAT)
}

const handleErrorResponse = function (e) {
  if (e.response.data === 'Cannot submit form more than once') {
    redirectToRepeatPage()
  }
}

class Form {
  @observable formData = initFormData

  @action reset() {
    self.schema = initFormData
  }

  @action async submitDriverForm(form) {
    try {
      const res = await postDriverForm(form)
      redirectToSuccessPage(res)
    } catch (e) {
      handleErrorResponse(e)
    }
  }

  @action async submitStudentForm(form) {
    try {
      const res = await postStudentForm(form)
      redirectToSuccessPage(res)
    } catch (e) {
      handleErrorResponse(e)
    }
  }

}

const self = new Form()

export default self