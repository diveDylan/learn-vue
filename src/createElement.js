const isString = obj => Object.prototype.toString.call(obj) === '[object String]'

function createElement(VNode) {
  if (isString(VNode)) {
    return createTextNode(VNode)
  }
  const el = document.createElement(VNode.tag)
  if (VNode.attrs) {
    setAttrs(el,VNode.attrs )
  }
  if (VNode.children.length > 0) {
    VNode.children.forEach(child => {
      el.appendChild(createElement(child))
    })
  }
  return el
}


function setAttrs(node, attrs) {
  Object.keys(attrs).forEach(attr => {
    if (attr !== 'on') node.setAttribute(attr, attrs[attr])
    else Object.keys(attrs.on).forEach(type => {
      node['on' + type] = attrs.on[type]
    })
  })
}

function createTextNode(node) {
  return document.createTextNode(node)
}

export default createElement