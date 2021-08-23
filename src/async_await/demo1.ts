let gen: Generator
function getData(data: any = 'default pro') {
    // gen.next()
    return new Promise(res=>{
        setTimeout(()=>{
            res(data)
        },2000)
    })
}
function* testGen(){
    const data = yield getData()
    const c = yield getData(data)
    yield getData(c)

}
function testGenCall(){
    gen = testGen()
    asyncGen(gen)
}
let i = 0

function asyncGen(gen: Generator){
    i++
    const { value, done } = gen.next(i)
    if(done){
        console.log('gen done')
    }else{
        if(value instanceof Promise){
            value.then(res=>{
                console.log(res)
                asyncGen(gen)
            })
        }
    }
}
testGenCall()