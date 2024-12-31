import axios from './axios'

const AuthServise = {
  async register(user) { 
    return  await axios.post('/auth/register', { ...user })
  },
  login(user) {
    return axios.post('/auth/login', { user })
  },
  getUser() {
    return axios.get('/getOne')
  },
}

export default AuthServise
