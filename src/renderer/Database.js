import { Persiston } from 'persiston'
import { FileAdapter } from 'persiston/adapters/file-adapter'

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
export default class Database extends Persiston {
  static instance = null

  static async connect (filename) {
    if (!this.store) {
      const adapter = new FileAdapter(filename)
      let store = new Database(adapter)
      Database.instance = await store.load()
    }

    return Database.instance
  }

  static disconnect () {
    Database.instance = null
  }

  group = this.collection('group')
  entry = this.collection('entry')
  field = this.collection('field')
}
