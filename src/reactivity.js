/**
 * make reactivity things here
 */
class Dep {
  constructor() {
    this.subscribeList = []
  }
  add() {
    if (target && !this.subscribeList.includes(target)) { // no repeat depend
      this.subscribeList.push(target)
    }
  }
  notify() {
    this.subscribeList.forEach(i => i())
  }
}
const product = {
  price: 2,
  count: 4,
  discount: 1
}
let total, sales
// we need total and sales
// we need update total and sales after price or discount change
// --- total = product.price * product.count
function getTotal() {
  total = product.price * product.count
}
// sales = product.price * product.discount
function getSales() {
  sales = product.price * product.discount
}
function observe(obj) {
  Object.keys(obj).forEach(prop => {
    let initVal = obj[prop]
    const dep = new Dep()
    Object.defineProperty(obj, prop, {
      get: function() {
        if (target) dep.add()
        console.log(`get ${prop}`)
        return initVal
      },
      set: function(val) {
        console.log(`set ${prop}`)
        initVal = val
        dep.notify()
      }
    })
  })
}
observe(product)
let target
function watcher(fn) {
  target = fn
  target()
  target = null
}

watcher(getTotal)
watcher(getSales)