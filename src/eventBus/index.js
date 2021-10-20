// //line=readline()
// //print(line)
// console.log('Hello World!');
// class asyncQueue{
//     constructor(){
//         this.red()
//         this.green()
//         setTimeout(this.next())
//     }
//     tasks = []
//     taskId = 0
//     next(){
//         const task = this.tasks[taskId]
//         task && task()
//     }

//     red(5){
//         const that = this
//         const task = ()=>{
//              this.sleep(3,()=>{
//                 that.next()
//             })
//         }
//         console.log("红灯")
//         this.tasks.push(task)
//         return this
//     }

//     green(3){
//         const that = this
//         const task = ()=>{
//             this.sleep(3,()=>{
//                 console.log("绿灯")
//                 that.next()
//             })
//         }
//         this.tasks.push(task)
//         return this
//     }

//     sleep(time,func){
//         setTimeout(func,time*1000)
//     }
// }
// new asyncQueue()


// async function change{
//     await red()
//     await green()
//     await yellow()
//     change()
// }

// async function red(time){
//     await sleep(time)
// }
// async function sleep(time){
//     return new Promise((res,rej)=>{
//         setTimeout(res,time*1000)
//     })
// }

// props
// /:id
// vueX
// eventBus on emit


// class{
//     tasks = {
//         name: [{
//             func: ()=>void,
//             isOne: false
//         }]
//     }

//     once = {
//         name: []
//     }
//     on(name,func){
//         if(tasks.hasOwnProperty(name){
//            tasks[name].push(func)
//         }else{
//             tasks[name] = [func]
//         }
//     }
//     emit(name){
//         const task = this.tasks[name]
//         if(task){
//             for(item of task){
//                 item()
//             }
//         }
//     }

//     off(name,func){

//     }

//     once(name,func){
//         func
//         ()=>{
//             return func.bind()
//         }
//     }

// }
function once(name,func){
    function fn(){

    }
}