/**
 * options
 * * * template `html code`
 * * * render  `jsx code`
 * * * data `init data`
 */
import Dep from './dep.js'
import Watcher from './watcher.js'

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
export default class Vue {
  constructor(options) {
    this.vm = this
    this.init(options)
    console.log(this)
    this.render()
    new Watcher(this.vm, 'price', this.render)
    return this.vm
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