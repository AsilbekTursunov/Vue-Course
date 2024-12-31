import AuthServise from '@/service/auth' 
const state = {
  user: null,
  isLoading: false,
}

const mutations = {
  setUser(state, user) {  
    state.user = user
  },
  setLoading(state, value) {
    state.isLoading = value
  },
}

const actions = {
 async  register(_, user) {
    return await AuthServise.register(user)
  },
}

export default {
  state,
  mutations,
  actions,
}
