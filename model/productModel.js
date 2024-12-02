const productData = require('../data/product.json')

function findAll(){
    return new Promise((resolve, reject) => {
        console.log(productData);  
        resolve(productData)
    })
}

module.exports = {
    findAll
}