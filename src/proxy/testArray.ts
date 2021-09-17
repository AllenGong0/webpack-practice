const testArr = [1,2,3]
const handler = {
    get: (target,key,rec)=>{
        console.log(`[get] key: ${key}`)
        return Reflect.get(target,key)
    },
    set: (target, key, value,rec)=>{
        console.log(`[set] key: ${key}`)
        return Reflect.set(target,key,value)
    }
}
const proxyArr = new Proxy(testArr,handler)
// console.log(proxyArr[1])
// proxyArr[1]=3
proxyArr.push(2)
// console.log(testArr)
