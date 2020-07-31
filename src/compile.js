import Watcher from './watcher.js'
import { textReg } from './utils.js'
export default class Compile {
  constructor(el, render, vm) {
    this.stack = []
    this.render = render
    this.el = el
    this.propQueue = []
    this.nodeObject = null
    this.vm = vm
    this.init()
  }

  createFg (node) {
    var fg = document.createDocumentFragment()
    var child
    while ( child = node.firstChild) {
      fg.appendChild( child )
    }
    return fg
  }

  init() {
    var fragment = this.createFg(this.el)
    const child = this.createArray(fragment.childNodes)
    console.log(child, fragment.childNodes)
    child.forEach( i => {
      if (this.isNode(i)) {
        this.compileNode(i)
      }
    })
    this.el.appendChild(fragment)
  }

  isNode = node => node.nodeType === 1

  isText = node => node.nodeType === 3

  compile() {

  }

  compileNode(node) {
    const text = node.innerText
    if (textReg.test(text)) {
      const prop = RegExp.$1
      console.log(node, prop, this.el)
      this.compileTextNode(node, prop)
    } else {

    }
  }

  compileTextNode(node, text) {
    node.innerText = this.vm.data[text]
    new Watcher(this.vm, text, () => {
      node.innerText = this.vm.data[text]
    })
  }

  createArray(arrayLikeObj) {
    return Array.prototype.slice.call(arrayLikeObj)
  }

  // format text {{text}} => text
  formatText(text) {
    const reg = /(\{\{ | \s* | \}\})/g
    return text.replace(reg, '')
  }

}