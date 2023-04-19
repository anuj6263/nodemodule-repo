
// setInterval(()=>{
//     console.log("Hello world")
// },100)

const output = require('./example')
const say = require('./utils')
require('./7-mind-grenade')

console.log(output.anuj)
console.log(output.vivek)

say('anuj')

const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('file1.txt','utf8')
const second = writeFileSync('file2.txt','Hello Anuj your a champion')
console.log(first,second)


// console.log(module)