// import a from './a' // export default 默认导出
// import { b, person,c } from './a' // export
// import { getName } from './b'

// person.name = 'allen'
// console.log(getName(),c)

setTimeout(()=>{
    import('./b').then(res=>{
        console.log(res,"esmodule")
    })
},2000)
