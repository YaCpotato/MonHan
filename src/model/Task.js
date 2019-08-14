import { Model } from '@vuex-orm/core'

export default class Task extends Model {
  static entity = 'tasks'

  static fields () {
    return {
      id: this.increment(),
      project_id :this.attr(null),
      name: this.string(''),
      phase: this.attr(null),
      want: this.boolean(false),
    }
  }
}
