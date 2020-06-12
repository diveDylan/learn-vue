/**
 * make reactivity things here
 */
const product = {
  price: 2,
  count: 4,
  discount: 1
}
let total, sales
// we need total and sales
total = product.price * product.count
sales = product.price * product.discount
function observe(obj) {
  Object.keys(obj).forEach(prop => {
    let initVal = obj[prop]
    Object.defineProperty(obj, prop, {
      get: function() {
        console.log(`get ${prop}`)
        return initVal
      },
      set: function(val) {
        console.log(`set ${prop}`)
        initVal = val
      }
    })
  })
}
observe(product)