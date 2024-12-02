const productData = require('../data/product.json')

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

module.exports = {
    findAll, findbyId
}