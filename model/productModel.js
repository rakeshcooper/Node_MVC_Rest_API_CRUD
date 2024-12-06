const productData = require('../data/product.json')
const { writeDatafile } = require('../utils')
const path =  require("path")
const ruuid = crypto.randomUUID()
const ProductVal = require('./productSchema')

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

// function newProduct(postData){
//     return new Promise(async(resolve, reject) => {
//        const newPostdata =  {id:ruuid, ...postData}
//        const poductval = await new ProductVal(newPostdata).validate()
//        productData.push(poductval)      
//        writeDatafile(path.join("data","product.json"), productData)
//        resolve(newPostdata)
//     })
// }


function newProduct(postData){
    return new Promise(async(resolve, reject) => {
          try{
                    const newPostdata =  {id:ruuid, ...postData}
                    const productVali =  new ProductVal(await newPostdata) 
                    await productVali.validate()
                    productData.push(productVali)      
                    await writeDatafile(path.join("data","product.json"), productData)
                    resolve(productVali)
            }   catch(err) {
                    reject(err)
            }
            
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