/**
 * dom json
 */
class VNode {
  constructor({
    tag,
    data, // attrs, click事件
    children,
    
  }) {
    this.tag = tag
    this.data = data
    this.children = children
  }
}