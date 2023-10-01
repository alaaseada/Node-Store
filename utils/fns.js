const fs = require('fs')
const path = require('path')
const rootDir = require("./path")
const p = path.join(rootDir, 'data')

const getDataFromFile = (fileName) => {
 return new Promise((resolve, reject) => {
    fs.readFile(path.join(p, fileName), (err, fileContent) => {
      console.log(path.join(p, fileName))
    if(err){
       resolve([])
     }
     console.log(fileContent)
     resolve(JSON.parse(fileContent))
   })
  })
}

module.exports = {getDataFromFile, p}
  