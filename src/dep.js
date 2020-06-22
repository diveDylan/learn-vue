export default class Dep {
  constructor() {
    this.subscribeList = []
  }
  static target = null // 利用这个缓存这次的依赖
  add() {
    if (Dep.target && !this.subscribeList.includes(Dep.target)) { // no repeat depend
      this.subscribeList.push(Dep.target)
    }
  }
  notify() {
    this.subscribeList.forEach(i => i.update())
  }
}