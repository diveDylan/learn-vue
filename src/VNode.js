/**
 * dom json
 */
class VNode {
  constructor({
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
  }) {
    this.tag = tag
    this.data = data
    this.el = elm
    this.children = children
    this.text = text
    this.context = context
    this.componentOptions = componentOptions
  }
}