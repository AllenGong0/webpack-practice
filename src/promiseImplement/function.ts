
function newPro(timeOut: number, needRej = false){
    return new Promise( (res, rej)=>{
        setTimeout( ()=>{
            needRej ? rej('error') : res(timeOut)
        }, timeOut)
    })
}

function all<T>(proArr:Promise<T>[]){
    const result: T[] = []
    let i = 0
    return new Promise( (resolve,reject) =>{
      proArr.forEach( (pro,index) => {
        pro
        .then(res=>{
          result[index] = res
          i++
          if(i===proArr.length){
            resolve(result)
          }
        })
        .catch(error=>{
            reject(error)
        })
      })
    })
}

function callAll(){
    const pro = [ newPro(2000), newPro(1000)]
    all(pro).then( res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })

}
callAll()