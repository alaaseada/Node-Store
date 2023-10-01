const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
let {getDataFromFile, p} = require('../utils/fns')
const fileName = 'cart.json'
p = path.join(p, fileName)

class Cart{
 constructor(items){
  this.id = uuid.v4()
  this.products = items
 }

 static async fetchAll(){
   let items = await getDataFromFile(fileName)
   return items
 }
}

module.exports = Cart