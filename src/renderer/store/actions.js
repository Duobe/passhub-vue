import PersistonStore from './../lib/persistonStore'

export default {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      try {
        resolve(payload.password)
      } catch (e) {
        reject(e)
      }
    }).then(result => {
      console.log(result)
      context.commit('afterLogin')
    })
  },
  getGroups (context) {
    return PersistonStore.findAllGroups()
  },
  createGroup (context, payload) {
    return PersistonStore.createGroup(payload).then((result) => {
      return result
    })
  },
  delGroup (context, groupId) {
    return PersistonStore.delGroupById(groupId)
  },
  editGroup (context, payload) {
    return PersistonStore.updateGroup(payload)
  },
  getEntriesByGid (context, groupId) {
    return PersistonStore.findAllEntriesByGid(groupId)
  },
  createEntry (context, payload) {
    return PersistonStore.createEntry(payload)
  },
  filterEntries (context, payload) {
    if (!payload.groupId) return

    return PersistonStore.findAllEntriesByGid(payload.groupId)
  }
}
