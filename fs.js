const { readFileSync , writeFileSync } = require('fs')

const first = readFileSync('./start/localrepoo/practice.js','utf8')
const second = readFileSync('./start/localrepoo/practice2.js','utf8')


console.log(first,second)


writeFileSync (
    './start/result-sync.js',
    `here is the result : ${first},${second}`,
    {flag: 'a'}
)