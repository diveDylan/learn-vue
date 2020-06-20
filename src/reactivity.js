/**
 * make reactivity things here
 */
class Dep {
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
class Vue {
  constructor(options) {
    this.vm = this
    this.init(options)
    console.log(this)
    new Watcher(this.vm, 'price', this.render)
  }

  init(options) {
    this.el = options.el
    this.template = options.template
    this.initData(options.data)
  }

  initData(data) {
    this.data = typeof data === 'function' ? data() : (data || {})
    observe(this.data, this.vm, this.render)
    
  }

  render = () => {
    console.log('render')
    this.el.innerText = this.vm.data.price
    // const nodeF = document.createDocumentFragment()
    // nodeF.appendChild(this.template)
    // this.el.appendChild(nodeF)
  }
}

function observe(obj, vm, cb) {
  Object.keys(obj).forEach(prop => {
    let initVal = obj[prop]
    const dep = new Dep()
    Object.defineProperty(obj, prop, {
      get: function() {
        if (Dep.target) dep.add()
        return initVal
      },
      set: function(val) {
        initVal = val
        dep.notify()
      }
    })
  })
}
class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get() // add depend
  }
  get() {
    console.log('get')
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
// watcher(getSales)