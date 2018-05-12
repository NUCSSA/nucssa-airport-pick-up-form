import { axios } from 'src/api/axios'

export const postSubmitForm = function(form, type) {
  const formSubmitApi = 'api/' + type + '/submit'
  axios.post(formSubmitApi, form)
}