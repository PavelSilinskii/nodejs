// const now = new Date().toLocaleString()

// console.log(Math.random())

const fs = require('fs')

const data = `
Hello world
I am Grut
`
fs.writeFileSync('nodeJs.txt', data)