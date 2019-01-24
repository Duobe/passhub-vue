import { Persiston } from 'persiston'
import { FileAdapter } from 'persiston/adapters/file-adapter'
import * as uuid from 'uuid'
/**
 * store.collection(): Collection
 * collection.find(query?: Query): Promise<T[]>
 * collection.findOne(query?: Query): Promise<T | null>
 * collection.insert<A extends T | T[]>(items: A): Promise
 * collection.update(query: Query, changes: Partial): Promise
 * collection.updateOne(query: Query, changes: Partial): Promise
 * collection.remove(query?: Query): Promise
 * collection.removeOne(query: Query): Promise
 */
class PersistonStore {
  store = null

  groups = null
  entries = null
  fields = null

  async initialize () {
    return new Promise((resolve, reject) => {
      try {
        const adapter = new FileAdapter('./data.json')
        let store = new Persiston(adapter)
        store = store.load()

        resolve(store)
      } catch (e) {
        reject(e)
      }
    }).then(store => {
      this.store = store
      this.groups = this.store.collection('groups')
      this.entries = this.store.collection('entries')
      this.fields = this.store.collection('fields')
    })
  }

  async createGroup (payload) {
    const groupItem = {
      id: uuid.v1(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      title: payload.title,
      icon: payload.icon
    }

    return this.groups.insert(groupItem)
  }

  async findGroupById (groupId) {
    const group = await this.groups.findOne({ id: groupId })
    return group
  }

  async findAllGroups () {
    const groups = await this.groups.find()
    return groups
  }

  async updateGroup (payload) {
    return this.groups.updateOne({ id: payload.id }, {
      title: payload.title
    })
  }

  async delGroupById (groupId) {
    return this.groups.removeOne({ id: groupId }).then(() => {
      this.entries.remove({ groupId })
    }).then(() => {
      this.fields.remove({ groupId })
    })
  }

  async createEntry (payload) {
    const entryItem = {
      id: uuid.v1(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      groupId: payload.groupId,
      title: payload.title,
      icon: payload.icon,
      description: payload.description
    }
    return this.entries.insert(entryItem)
  }

  async filterEntries (payload) {
    const entry = await this.entries.find(payload)
    return entry
  }

  async findEntry (payload) {
    const entry = await this.entries.findOne(payload)
    return entry
  }

  async findAllEntriesByGid (groupId) {
    const entries = await this.entries.find({ groupId })
    return entries
  }

  async updateEntry (entryId, payload) {
    return this.entries.updateOne({ id: entryId }, payload)
  }

  async deleteEntry (entryId) {
    return this.entries.removeOne({ id: entryId })
  }
}

export default new PersistonStore()
