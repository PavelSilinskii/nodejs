const express = require ('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()

// d4e2b2c498da3cf2cbbf2b6f050ad559

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
res.render('index')
})

app.post('/',(req,res)=>{
    
   const { city } = req.body
   
weatherRequest(city)

    res.render('index')
})

app.listen(3000,()=>{
    console.log('Server has started on the port 3000...')
})