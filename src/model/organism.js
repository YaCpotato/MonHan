import { Model } from '@vuex-orm/core'
import molecule from '../model/molecule'

export default class organism extends Model {
  static entity = 'organism'

  static fields () {
    return {
      id: this.increment(),
      weapon: this.hasOne(molecule, 'id'),
      armor:this.hasMany(molecule,'id')
    }
  }
}