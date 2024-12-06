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

function newProduct(postData,res){
    return new Promise(async(resolve, reject) => {
          try{
                    const newPostdata =  {id:ruuid, ...postData}
                    const productVali =  new ProductVal(await newPostdata) 
                    await productVali.validate()
                    productData.push(productVali)      
                    await writeDatafile(path.join("data","product.json"), productData)
                    resolve(productVali)
            }   catch(err) {
                     reject(err )
                     res.writeHead(201,{"content-type":"application/json"})
                     res.end(JSON.stringify({message:`${err}`}))
           }
            
    })
}


function update(id, updatedData){
    return new Promise(async(resolve, reject) => {
       try{
           const index = productData.findIndex((p) => p.id === id) 
           const newUpdateddata =  {id:id, ...updatedData}
           const productVali =  new ProductVal(await newUpdateddata) 
           await productVali.validate()
           productData[index] = productVali      
           writeDatafile(path.join("data","product.json"), productData)
           resolve(productVali)
       } catch(err){
             reject(err )
             res.writeHead(201,{"content-type":"application/json"})
             res.end(JSON.stringify({message:`${err}`}))
       }
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