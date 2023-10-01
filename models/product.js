const uuid = require('uuid')
const fs = require('fs')
const path = require('path')
let {getDataFromFile, p} = require("../utils/fns") 
const fileName= 'products.json'
p = path.join(p, fileName)

class Product {
 constructor(title, imageUrl, price, description){
  this.id = uuid.v4()
  this.title = title
  this.imageUrl = imageUrl
  this.price = price
  this.description = description
 }

 async save(){
  let products = await getDataFromFile(fileName)
  products.push(this)
  fs.writeFile(path.join(p, 'products.json'), JSON.stringify(products), (err) => console.log(err))
 }

 static async fetchAll(){
  return await getDataFromFile(fileName)
 }

 static async delete(id){
  let products = await getDataFromFile(fileName)
  let filtered_products = products.filter(item => item.id !== id)
  fs.writeFile(p, JSON.stringify(filtered_products), err => console.log(err))
 }

 static async fetchSingleProduct(id){
    const products = await getDataFromFile(fileName)
    const product = products.find(item => item.id === id)
    return product
 }

 static async update(id, args){
  let products = await getDataFromFile(fileName)
  let updated_products = products.map((product) => {
    if(product.id === id){
      return {...product, ...args}
    }else{
      return product
    }
  })
    fs.writeFile(p, JSON.stringify(updated_products), err => console.log(err))
 }
}

module.exports = Product