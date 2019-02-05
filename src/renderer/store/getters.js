export default {
  filterEntries: state => {
    return state.entries.filter(entry => entry.title.indexOf(state.entryKeyword) >= 0)
  }
}
