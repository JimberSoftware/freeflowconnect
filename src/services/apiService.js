import Axios from 'axios'
import config from '../../public/config'
export default ({
  getRoom (name) {
    return Axios.get(`${config.apiUrl}/rooms/${name}`)
  },
  getRooms () {
    return Axios.get(`${config.apiUrl}/rooms`)
  },
  createRoom (name) {
    return Axios.post(`${config.apiUrl}/rooms`, { name: name })
  },
  joinRoom (name) {
    return Axios.patch(`${config.apiUrl}/rooms/${name}`, { user: name })
  },
  getUser (name) {
    return Axios.get(`${config.apiUrl}/users/${name}`)
  },
  createUser (name) {
    return Axios.post(`${config.apiUrl}/users`, { name: name })
  }
})
