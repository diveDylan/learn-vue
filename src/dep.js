export default class Dep {
  constructor() {
    this.subscribeList = []
  }
  add(i) {
    if (target) {
      this.subscribeList.push(i)
    }
  }
  notify() {
    this.subscribeList.forEach(i => i())
  }
}