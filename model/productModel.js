const productData = require('../data/product.json')
const { writeDatafile } = require('../utils')
const path =  require("path")
const ruuid = crypto.randomUUID()

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(productData)
    })
}

function findbyId(id){
    return new Promise((resolve, reject) => {
        const foundProduct = productData.find((p) => p.id === id)
        resolve(foundProduct)
    })
}

function newProduct(postData){
    return new Promise((resolve, reject) => {
       const newPostdata =  {id:ruuid, ...postData}
       productData.push(newPostdata)      
       writeDatafile(path.join("data","product.json"), productData)
       resolve(newPostdata)
    })
}

function update(id, updatedData){
    return new Promise((resolve, reject) => {
       const index = productData.findIndex((p) => p.id === id) 
       const newUpdateddata =  {id:id, ...updatedData}
       productData[index] = newUpdateddata      
       writeDatafile(path.join("data","product.json"), productData)
       resolve(newUpdateddata)
    })
}


function deleteData(id){
    return new Promise((resolve, reject) => {
       const removedData = productData.filter((p) => p.id !== id) 
       productData.push(removedData)      
       writeDatafile(path.join("data","product.json"), removedData)
       resolve(removedData)
    })
}

module.exports = {
    findAll, findbyId, newProduct, update, deleteData
}