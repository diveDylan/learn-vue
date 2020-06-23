import Dep from './dep.js'
export default class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get() // add depend
  }
  get() {
    console.log('get', this.exp)
    Dep.target = this
    const val = this.vm.data[this.exp]
    Dep.target = null
    return val
  }

  update() {
    this.run()
  }

  run() {
    const oldVal = this.value
    const newVal = this.vm.data[this.exp]
    if (oldVal !== newVal) {
      this.cb.call(this, newVal)
    }
  }
}