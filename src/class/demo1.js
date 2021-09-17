class c_a{

}
function c_b(){
}
const beforeHeap = process.memoryUsage().heapUsed

const demo1 = new c_a()

const classHeap = process.memoryUsage().heapUsed

const demo2 = new c_b()

const funcHeap = process.memoryUsage().heapUsed

console.log(`
class: ${classHeap - beforeHeap}
func: ${funcHeap - classHeap}`)
