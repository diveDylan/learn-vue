### 学习步骤
1. step 1<br/>
  --- 理解defineProperty这个api的应用
  > defineProperty是reactivity响应式的基础api，提供了对象属性getter/setter拦截
2. step 2<br/>
  --- 理解reactivity这个概念，可以根据事件onchange--》update这个思想理解数据\n
  reactivity可以说是根据我们交互和日常升华出来的一个概念
  ```js
  // i have one apple $2
  let price = 2
  let count = 1
  total = price * count // 2
  // now i got two apple
  count = 2
  // total should be 4 not 2
  total = 2
  ```
  所以当我们设置`count`的时候我们需要更新`total`，我们进一步抽象这个概念术语，把`count`的改变定一个为`apple`的`setter`，设置`setter`更新`total`这个过程叫通知`notify`
  改写上面的函数
  ```js
  const apple = {
    price: 2,
    count: 1
  }
  let count = apple.count, total
  const notify = () => total = apple.price * apple.count
  Object.defineProperty(apple, 'count', {
    get() {
      return count
    },
    set(val) {
      count = val
      notify()
    }
  })
  notify() // total = 2
  apple.count = 2 // total = 4
  
  ```
  运行上面的你会发现，每次更改`count`，`total`就会随时更新，这就是我们想要的神奇`reactivity`。
  但是想象一下如果我们`apple`有多个属性随着`count`更新，`setter`这里的`notify`函数会是一个相当大的体量非常不利于我们查看、维护和管理，于是我们抽象出一个管理员记账本这样的概念去管理这些通知，我们成这个概念为`Dep`，同理我们也需要一个一个`add`增加这些通知（对的，是不是很像数据结构的队列的入队和出队）,同样的我们还需要定义`notify`执行的动作`target`
  ```js
  const apple = {
    price: 2,
    count: 1
  }
  let target,
  const watcher = fn => {
    target = fn
    target()
    target = null
  }
  watcher(() => {
    total = apple.price * apple.count
  })
  watcher(() => {
    half = apple.price * apple.count / 2
  })
  class Dep {
    constructor() {
      this.subs = []
    }
    add(i) { // 记录todos no repeat
      if(!this.subs.includes(i)) this.subs.push(i)
    }
    notify() { // do things one by one
      this.subs.forEach(i => i())
    }
  }
  const dep = new Dep()
  Object.keys(apple).forEach(key => {
    let initVal = apple[key]
    Object.defineProperty(apple, key, {
      get() {
        target && dep.add(target)
        return initVal
      },
      set(val) {
        initval = val
        dep.notify()
      }
    })
  })

  ```
这里我们就实现了一个简单的`reactivity system`<br/>
3. step 3<br/>
  --- 创建一个dep管理多个数据的reactivity
</br>
4. step 4<br/>
  --- 创建一个Watcher
</br>
5. step 5<br/>
  --- 创建一个compile
</br>
6. step 6<br/>
  --- 创建一个vue
</br>
7. step 7<br/>
  --- proxy fro reactivity