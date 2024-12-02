const http = require('http')
const PORT = process.env.PORT || 6000
const { getProducts } = require('./controller/productController')

const server = http.createServer(async(req,res) => {
    try{
        if(req.url == "api/products" && req.method === "GET"){
           await getProducts(req,res)
        }
        else {
            res.writeHead(404,{"content-type":"application/json"})
            res.write(JSON.stringify({message : "Route not founded"}))
        }

        res.end()
    }catch(err){
        console.error(err);
    }
})

server.listen(PORT,() => {
    console.log(`PORT ${PORT} is running`);
})