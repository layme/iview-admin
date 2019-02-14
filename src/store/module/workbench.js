export default {
  state: {
    openModal: false
  },
  getters: {
    modalStatus: state => state.openModal
  },
  mutations: {
    showModal (state, status) {
      state.openModal = status
    }
  },
  actions: {
    //
  }
}
