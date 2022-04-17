const express = require ('express')

const app = express()

app.get('/',(req,res)=>{
res.end('Hello from NodeJs')
})

app.listen(3000,()=>{
    console.log('Server has started on the port 3000...')
})