const state = () => ({
  drawer: false
})

const mutations = {
  set_drawer(state, newVal) {
    state.drawer = newVal
  }
}

export default {
  state,
  mutations
}
