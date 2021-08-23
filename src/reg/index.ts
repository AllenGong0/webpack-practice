const str = `w d q d`
const reg = /<[^<>]+>/g
const re = str.replace(reg,"")
console.log(str)
console.log(re)