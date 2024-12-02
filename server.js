const http = require("http")
const product = require("./data/product.json")
const productData = require("./model/productModel")
const PORT = process.env.PORT || 3000
const { getProducts, getProductbyid, createProduct, updateProduct, deleteProduct } = require("./controller/productController")

const server = http.createServer(async(req,res) => {
    try{
        if(req.url === "/api/products" && req.method === "GET"){
            await getProducts(req,res)
        } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "GET"){
            const id = req.url.split("/")[3]
            await getProductbyid(req,res,id)
        } else if(req.url === "/api/products" && req.method === "POST"){
            await createProduct(req, res)
        } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "PUT"){
            const id = req.url.split("/")[3]
            await updateProduct(req,res,id)
        } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "DELETE"){
            const id = req.url.split("/")[3]
            await deleteProduct(req,res,id)
        }       
        else {
            res.writeHead(404,{"content-type":"application/json"})
            res.write(JSON.stringify({message : "Route not founded"}))
        }
        res.end()
    }catch(error){
        console.error(error);
    }
})

server.listen(PORT,() => {
    console.log(`PORT ${PORT} is running`);
})