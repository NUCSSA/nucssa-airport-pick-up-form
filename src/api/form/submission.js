import { axios } from 'src/api/axios'

const FORM_URI = 'api/forms/submissions'
const STUDENT_FORM_URI = FORM_URI + '/student'
const DRIVER_FORM_URI = FORM_URI + '/driver'

export const postStudentForm = async function(form) {
  return await axios.post(STUDENT_FORM_URI, form)
}

export const postDriverForm = async function(form) {
  return await axios.post(DRIVER_FORM_URI, form)
}

