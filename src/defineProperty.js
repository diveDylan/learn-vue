const ipt = document.querySelector('input')
let data = {
  value: 1
}
const debounce =  (fn, duration=200) => {
  let timer
  return function() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn(...arguments)
      timer = null
    }, duration);
  }
}
const set = val => {
  console.log('set', Date.now())
  ipt.value = val
}
const debounceSet = debounce(set)
Object.defineProperty(data, 'value', {
  get() {
    return ipt.value
  },
  set: debounceSet
})
ipt.oninput = e => {
  data.value = e.target.value // 更新data中的value
}

const timer = setTimeout(() => {
   data.value ++
}, 1000)




