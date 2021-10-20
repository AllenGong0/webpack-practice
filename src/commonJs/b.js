const foo = require('./a')
console.log(foo,"b.js")
function getName(){
    return foo.a
}
module.exports = getName