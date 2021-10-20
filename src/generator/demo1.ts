function* genTest(){
    const a = yield 2 + 5
    const b = yield 3 + 6 + 2
}

function callGenTest(){
    console.log("before: gen")
    const genIter = genTest()
    // const av = d.next()
    // const bv = d.next(20)
    // const cv = d.next()
    const gen = [...genIter]
    console.log(gen)
    // console.log(d,av, bv,cv)
    // const c = d.next()
    // console.log(c,d)
    console.log("after: gen")
}
callGenTest()


function* iterArr(arr){
    if( Array.isArray(arr)){
        for (let index = 0; index < arr.length; index++) {
            yield* iterArr(arr[index])
        }
    }else{
        yield arr
    }
}

function callIter(){
    // 使用 for of 以及 解构的方式均可遍历迭代器
    const arr = [1,2,3,[2,2],2,3,4,[2,3,4,[3,4,[4]]]]
    // for (const iterator of iterArr(arr)) {
    //     console.log(iterator)
    // }
    const gen = iterArr(arr)
    const newArr = [...gen]
    console.log(newArr)
}
callIter()