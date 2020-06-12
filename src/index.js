/**
 * options
 * * * template `html code`
 * * * render  `jsx code`
 * * * data `init data`
 */
import { isFn, isObj } from './utils'
class Vue {
  constructor(options) {
    this.initData(options)
    
  }
  initData = options => {
    this.data = isFn(options.data) ? this.getData(options.data) : 
      options.data || {}
  }

  mergeData = fn => {
    const data = fn()
  }

}