/**
 * make reactivity things here
 */

function defineReactivity(obj, vm, cb) {
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

// watcher(getSales)