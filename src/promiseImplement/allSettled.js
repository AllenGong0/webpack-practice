const rejectHandler = reason => ({status: "rejected", reason})
const resolveHandler = value => ({status: "fulfilled", value})
Promise.allSettled = promises =>{
    const proMap = promises.map((promise) =>
    promise.then(resolveHandler, rejectHandler)
  )
  return Promise.all(proMap)
// 每个 promise 需要用 Promise.resolve 包裹下
// 以防传递非 promise
}

// 使用
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'three');
})

const promises = [p1, p2, p3]
Promise.allSettled(promises).then(console.log)