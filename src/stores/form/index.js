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
  @observable error = null

  @action reset() {
    self.error = null
    self.schema = initFormData
  }

  @action async submitDriverForm(form) {
    self.error = null
    try {
      const res = await postDriverForm(form)
      redirectToSuccessPage(res)
    } catch (e) {
      handleErrorResponse(e)
      self.error = e.response.data[0].message
    }
  }

  @action async submitStudentForm(form) {
    self.error = null

    try {
      const res = await postStudentForm(form)
      redirectToSuccessPage(res)
    } catch (e) {
      handleErrorResponse(e)
      self.error = e.response.data[0].message
    }
  }

}

const self = new Form()

export default self