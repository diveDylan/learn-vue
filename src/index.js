/**
 * options
 * * * template `html code`
 * * * render  `jsx code`
 * * * data `init data`
 */
import { isFn } from './utils.js'
import Dep from './dep.js'
import Compile from './compile.js'

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
    return this.vm
  }

  init(options) {
    this.el = options.el
    this.initData(options.data)
  }

  initData(data) {
    this.data = isFn(data) ? data() : (data || {})
    observe(this.data, this.vm, this.render)
    new Compile(this.el, this.render, this.vm)
  }

  proxyForData(data) {
    return new Proxy(this, {
      get: function(target, prop, reciver) {
        if (this[prop]) {
          Reflect.get(target, prop, reciver)
        } else if(this.data[prop]) {
          this.data[prop]
        }
      },
      set: function(target, prop, value, reciver) {
        if (this[prop]) {
          Reflect.set(target, prop, value)
        } else if(this.data[prop]) {
          this.data[prop] = value
        }
      }
    })
  }

 
}