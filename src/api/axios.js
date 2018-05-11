import axios from 'axios'
import { API_END_POINT } from 'src/data/api'

axios.defaults.baseURL = API_END_POINT

export default axios