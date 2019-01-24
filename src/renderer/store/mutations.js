export default {
  logout (state) {
    state = {}
  },
  afterLogin (state) {
    state.isLogged = true
  },
  afterInsertEntry (state) {
    state.isInserted = !state.isInserted
  },
  filter (state, keyword) {
    state.entryKeyword = keyword
  }
}
