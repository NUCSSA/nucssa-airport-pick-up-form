import { axios } from 'src/api/axios'

const ORDER_URI = 'api/orders/'
const NEED_TO_BE_ASSIGNED_STUDENT_SUBMISSIONS = ORDER_URI + '/needToBeAssignedStudentSubmissions'

export const getNeedToBeAssignedStudentSubmissions = async function() {
  return await axios.get(NEED_TO_BE_ASSIGNED_STUDENT_SUBMISSIONS )
}
