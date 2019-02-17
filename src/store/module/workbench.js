export default {
  state: {
    openModal: false,
    mouseDown: false,
    origin: {
      dateIndex: 0,
      bedIndex: 0
    }
  },
  getters: {
    modalStatus: state => state.openModal,
    mouseStatus: state => state.mouseDown,
    originData: state => state.origin
  },
  mutations: {
    setModal (state, status) {
      state.openModal = status
    },
    setMouse (state, status) {
      state.mouseDown = status
    },
    setOrigin (state, data) {
      state.origin = data
    }
  },
  actions: {
    //
  }
}
