import { Model } from '@vuex-orm/core'
import Task from '../model/Task'
import moment from 'moment'

export default class Project extends Model {
  static entity = 'project'

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      tasks: this.hasMany(Task, 'project_id'),
      day: this.string(moment().format('YYYY/MM/DD'))
    }
  }
}
