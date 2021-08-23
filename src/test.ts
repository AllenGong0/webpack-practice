// // union to intersection of functions
// type UnionToIoF<U> =
//     (U extends any ? (k: (x: U) => void) => void : never) extends
//     ((k: infer I) => void) ? I : never

import { from } from "rxjs";

// // return last element from Union
// type UnionPop<U> = UnionToIoF<U> extends (a: infer A) => void ? A : never

// // prepend an element to a tuple.
// type Prepend<U, T extends any[]> =
//     ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never

// type UnionToTupleRecursively<Union, Result extends any[]> = {
//     1: Result
//     0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>
// }[[Union] extends [never] ? 1 : 0]

// type UnionToTupleRecursively_<Union, Element, Result extends any[]> =
//     UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>

// export type UnionToTuple<U> = UnionToTupleRecursively<U, []>

// interface A {
//     a: number,
//     b: number
// }
// const a: UnionToTuple<keyof A> = ['a','b']
// let arr = [1,2,3,4,5,6]
// const arr1 = arr.map( item=> {
//     switch(item){
//         case 1:
//             return 3
//         case 2:
//             return 5
//         default:
//             return 8
//     }
// })
// console.log(arr1)

// var aa = 2
// switch(aa){
//     case 1:
//     console.log('1')
//     case 2:
//     console.log('2')
//     case 3:
//     console.log('3')
//     default:
//     console.log('default')
// }
// var obj = {
//     a: {
//         b:5
//     }
// }
// function change(a: any) {
//     a.b = 10
// }
// const {a} = obj
// change(a)
// console.log(obj)
// function t(){
//     console.log('222')
// }
// true && t()

export class classTest {
  static getConfig(){
    this.tes();
  }
  static tes(){
    console.log(this);
  }
}
classTest.getConfig();

function test() {
  const clickedArr = [0,5]
  const temp: number[] = []
  const test = [[0],[5]]
  test.forEach((item) => {
      let count = 0
      console.log(`item: ${JSON.stringify(item)}`)
      clickedArr.forEach((ele) => {
        console.log(`ele: ${ele} indexOf: ${item.indexOf(ele)}`)
          if (item.indexOf(ele) === -1) {
              count++
          }
      })
      temp.push(count)
  })
  console.log(temp)
}

function findAnswerIndex(submitAnswer: number[], speakingWords: string[], word: string){
    for (let index = 0; index < speakingWords.length; index++) {
      const speakWord = speakingWords[index]
      if(speakWord === word && !~submitAnswer.indexOf(index)){
        console.log(index)
        return index
      }
    }
    return -1
}
const speakWord = ['writte','write','write','HIGH','WRITE','high']
// const index = findAnswerIndex([],speakWord,'write')
// console.log(index)
console.log("====")
function swichTest(a: number){
  switch (a){
    case 1:
    case 5:
    console.log("a")
  }
}
// swichTest(1)
function newPro(time, result){
  return new Promise(res=>{
    setTimeout(res,time, result)
  })
}

async function forAwaitOf(){
    const proA = newPro(2000, 10)
    const proB = newPro(1000, 11)
    // const newMap = new Map([
    //   [0, proA],
    //   [1, proB]
    // ])
    // const newArr = []
    // for (const [node, pro] of newMap) {
    //   const res = await pro
    //   newArr.push(res)
    // }
    // console.log(newArr)
    const res = await Promise.all([proA,proB])
    console.log(res)
    console.log("res__")
}

function iteratorTest(){
  // const symbolIterator = {
  //   from: 1,
  //   to: 5,
  //   [Symbol.iterator]: function(){
  //     const that = this
  //     return {
  //       current: that.from,
  //       last: that.to,
  //       next(){
  //         if(this.current <= this.last){
  //           return { done: false, value: this.current++}
  //         }
  //         return {done: true}
  //       }
  //     }
  //   }
  // }


  const symbolIterator = {
    from: 1,
    to: 5,
    [Symbol.iterator]: function(){
      return this
    },
    next(){
      if(this.from <= this.to){
        return { done: false, value: this.from++}
      }
      return {done: true}
    }
  }

  for (const iterator of symbolIterator) {
    console.log(iterator)
  }
}

// iteratorTest()

// forAwaitOf()
function connectionTest(){
  const { navigator } = window as any
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const {effectiveType, downlink, rtt} = connection
  console.log(connection)
}


function proTest(){
  const reso = []
  const pro = new Promise((res)=>{
    reso.push(res)
  })
  pro.then(res=>{
    console.log("----")
  })
  setTimeout(()=>{
    reso[0]()
  },2000)
}
// proTest()
// connectionTest()



function isInViewPortOfOne (el) {
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;//窗口可视高度
  const offsetTop = el.offsetTop;//元素顶部高度
  const offsetHeight = el.offsetHeight;//元素高度
  const scrollTop = document.documentElement.scrollTop;//滚动距离
  //判断是否在工作窗口内
  const top = (offsetTop+offsetHeight )- scrollTop
  if(top>0&&top<viewPortHeight){
      return true
  }
  else{
      return false;
  }
}


// function objTest(){
//   const a = {}
//   Object.assign(a,{b:1})
//   console.log(a)
// }
