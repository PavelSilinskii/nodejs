// const now = new Date().toLocaleString()

// console.log(Math.random())

const fs = require('fs')

const data = `
Hello world
I am Grut
`
fs.writeFileSync('nodeJs.txt', data)

const result=fs.readFileSync('nodeJs.txt',{encoding: 'utf-8'})

console.log(result)

console.log(__dirname)
console.log(__filename)