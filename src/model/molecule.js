import { Model } from '@vuex-orm/core'
import atom from '../model/atom'

export default class molecule extends Model {
  static entity = 'molecule'

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      type:this.attr(null),
      material:this.hasMany(atom, 'id'),
    }
  }
}