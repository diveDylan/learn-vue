export default class Dep {
  constructor() {
    this.subscribeList = []
  }
  static target = null // 一次缓存一个需要更新的依赖，可以理解为回调
  add() {
    if (target) {
      this.subscribeList.push(target)
    }
  }
  notify() {
    this.subscribeList.forEach(i => i())
  }
}