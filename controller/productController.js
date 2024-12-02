
const {findAll, findbyId, newProduct} = require('../model/productModel')
const { bodyPostdata } = require("../utils")

const header = {"content-type":"application/json"}
const noId = {message: "ID not found"}

async function getProducts(req,res){
    try{
        const showProduct = await findAll()
        res.writeHead(200,header)
        res.end(JSON.stringify(showProduct))
    } catch(error) {
        console.error(error);    
    }
}

async function getProductbyid(req,res,id){
    try{
        const productbyID = await findbyId(id)
        console.log(productbyID);
        
        if(!productbyID){
            res.writeHead(400, header)
            res.end(JSON.stringify(noId))
        } else{
            res.writeHead(200,header)
            res.end(JSON.stringify(productbyID))
        }
    } catch(err){
        console.error(err);
        
    }
}

async function createProduct(req, res){
    try{

        const body = await bodyPostdata(req,res)
        const {names, desc} = JSON.parse(body)
        const product = {
            names,
            desc
        }
        const newProductdata = await newProduct(product)
        res.writeHead(201,header)
        return res.end(JSON.stringify(newProductdata))
        
    }catch(err){
        console.log(err);
        
    }
}

module.exports = {
    getProducts, getProductbyid, createProduct
}