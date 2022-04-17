const rp = require('request-promise')

module.exports = async function(city){
if(!city){
    throw new Error ('Имя города не указано')
 }

 const KEY = 'd4e2b2c498da3cf2cbbf2b6f050ad559'
 const uri ='https://api.openweathermap.org/data/2.5/weather'
 const options = {
    uri: uri,
    qs: {
      appid:KEY,
      q:city,
      units: 'imperial'
    },
    json: true
 }

 try{
    const data = await rp(options)
    const celsius = (data.main.temp -32)*5/9
     return {
        weather:`${data.name} : ${celsius.toFixed(0)}`,
        error: null
    }
 }catch(error){
     return{
         weather: null,
         error: error.error.message
     }
 }
 

 

}