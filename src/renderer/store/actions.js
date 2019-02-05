import * as uuid from 'uuid'
import Database from '../Database'

let db = null

export default {
  async login ({ commit }, password) {
    db = await Database.connect('./data.json')
    commit('AFTER_LOGGED')
  },
  async fetchAllGroup ({ commit }) {
    const groups = await db.group.find()
    commit('SET_GROUPS', groups)
  },
  async createGroup ({ commit, dispatch }, { title, icon }) {
    const group = await db.group.insert({
      id: uuid.v1(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      title: title,
      icon: icon
    })
    commit('SELECT_GROUP', group)
    dispatch('fetchAllGroup')
  },
  async deleteGroup ({ dispatch, commit }, groupId) {
    await db.group.removeOne({ id: groupId })

    const entries = await db.entry.find({ groupId })
    for (let i = 0; i < entries.length; i++) {
      await db.field.remove({ entryId: entries[i].id })
    }

    await db.entry.remove({ groupId })
    commit('RESET_STATE')
    dispatch('fetchAllGroup')
  },
  async updateGroup ({ dispatch }, { groupId, title }) {
    await db.group.updateOne({ id: groupId }, { title, modifiedAt: Date.now() })
    dispatch('fetchAllGroup')
  },
  async fetchAllEntry ({ commit }, groupId) {
    const entries = await db.entry.find({ groupId })
    commit('SET_ENTRIES', entries)
  },
  async createEntry (
    { commit, dispatch },
    { groupId, description, title, icon }
  ) {
    const entry = await db.entry.insert({
      id: uuid.v1(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      groupId,
      description,
      title,
      icon
    })
    commit('SELECT_ENTRY', entry)
    dispatch('fetchAllEntry', groupId)
    dispatch('fetchAllField', entry.id)
  },
  async updateEntryTitle ({ dispatch }, { id, title, groupId }) {
    await db.entry.updateOne({ id }, { title, modifiedAt: Date.now() })
    dispatch('fetchAllEntry', groupId)
  },
  async updateEntryDesc ({ dispatch }, { id, description, groupId }) {
    await db.entry.updateOne({ id }, { description, modifiedAt: Date.now() })
    dispatch('fetchAllEntry', groupId)
  },
  async fetchAllField ({ commit }, entryId) {
    const fields = await db.field.find({ entryId })
    commit('SET_FIELDS', fields)
  },
  async deleteField ({ dispatch }, { id, entryId }) {
    await db.field.removeOne({ id })
    dispatch('fetchAllField', entryId)
  },
  async createField ({ dispatch }, { entryId, title, icon, value }) {
    await db.field.insert({
      id: uuid.v1(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      entryId,
      title,
      icon,
      value
    })
    dispatch('fetchAllField', entryId)
  },
  async updateFieldTitle ({ dispatch }, { id, title, entryId }) {
    await db.field.updateOne({ id }, { title, modifiedAt: Date.now() })
    dispatch('fetchAllField', entryId)
  },
  async updateFieldValue ({ dispatch }, { id, value, entryId }) {
    await db.field.updateOne({ id }, { value, modifiedAt: Date.now() })
    dispatch('fetchAllField', entryId)
  }
}
