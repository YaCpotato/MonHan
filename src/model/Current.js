import { Model } from '@vuex-orm/core'
import Task from '../model/Task'

export default class Project extends Model {
  static entity = 'current'

  static fields () {
    return {
      id: this.attr(null),
      name: this.string(''),
      tasks: this.hasMany(Task, 'project_id'),
      day: this.attr(null)
    }
  }
}
