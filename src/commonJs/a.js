const b = require('./b')
let count = {
    name: 'say'
}
function increment(){
    count = 200
}
module.exports = {
    age: 1,
    a: 'hello',
    increment,
    count
}