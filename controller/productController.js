
const {findAll} = require('../model/productModel')

const header = {"content-type":"application/json"}

async function getProducts(req,res){
    try{
        const showProduct = await findAll()
        res.writeHead(200,{ "content-type":"application/json" })
        res.end(JSON.stringify(showProduct))
    } catch(error) {
        console.error(error);
        
    }
}

module.exports = {
    getProducts
}