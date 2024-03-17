const path = require('path')

console.log(path.sep)

const filepath = path.join('/start/','localrepoo','path.js')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute= path.resolve(__dirname,'start','localrepoo','path.js')
console.log(absolute)