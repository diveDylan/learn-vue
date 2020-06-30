/**
 * create Vue with render function
 * no compile core
 */

import { isFn } from './utils.js'
import Watcher from './watcher.js'
import Dep from './dep.js'

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
    new Watcher(vm, prop, cb)
  })
}
export default class Vue {
  constructor(options) {
    this.vm = this
    this.init(options)
  }

  init(options) {
    this.el = options.el
    this.template = options.template
    console.log(this.template)
    this.initData(options.data)
  }

  initData(data) {
    this.data = isFn(data) ? data() : (data || {})
    this.render()
    observe(this.data, this.vm, this.render)
  }

  render = () => {
    const template = this.template(this.data)
    this.el.innerHTML = template
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