import { Model } from '@vuex-orm/core'

export default class atom extends Model {
  static entity = 'atom'

  static fields () {
    return {
      id: this.increment(),
      name: this.string('')
    }
  }
}