export default {
  SET_GROUPS (state, groups) {
    state.groups = groups
  },
  SELECT_GROUP (state, group) {
    state.group = group
    state.entryKeyword = ''
    state.entries = []
    state.entry = null
    state.fields = []
  },
  DELETE_GROUP (state) {
    state.entryKeyword = ''
    state.entries = []
    state.entry = null
    state.fields = []
  },
  SET_ENTRIES (state, entries) {
    state.entries = entries
  },
  SELECT_ENTRY (state, entry) {
    state.entry = entry
    state.fields = []
  },
  DELETE_ENTRY (state) {
    state.entryKeyword = ''
    state.entry = null
    state.fields = []
  },
  SET_FIELDS (state, fields) {
    state.fields = fields
  },
  SET_ENTRY_KEYWORD (state, keyword) {
    state.entryKeyword = keyword
  },
  RESET_STATE (state) {
    state.group = null
    state.entry = null
    state.entries = []
    state.fields = []
    state.entryKeyword = ''
  },
  AFTER_LOGGED (state) {
    state.isLogged = true
  },
  LOGOUT (state) {
    state.isLogged = false
  }
}
