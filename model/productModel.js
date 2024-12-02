const productData = require('../data/product.json')
const { writeDatafile } = require('../utils')
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
       const newData =  productData.push({id:ruuid, ...postData})      
        writeDatafile(newData)
        resolve(newData)
    })
}

module.exports = {
    findAll, findbyId, newProduct
}