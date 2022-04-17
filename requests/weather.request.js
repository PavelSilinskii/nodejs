const rp = require('request-promise')

module.exports = async function(city){
if(!city){
    throw new Error ('Имя города не указано')
 }
console.log('city:',city)
}