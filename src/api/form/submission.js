import { axios } from 'src/api/axios'

export default function(form, type){
  const formSubmitApi = 'api/' + type + '/submit'
  console.log('axios', axios)
  axios.post(formSubmitApi, form)
}