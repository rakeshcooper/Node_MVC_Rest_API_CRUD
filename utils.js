const fs = require("fs")
const path =  require("path")

function writeDatafile(content){
    fs.writeFileSync(path.join("data","product.json"),content, "utf-8", (err) => {
        console.error(err);
        
    })
}

function bodyPostdata(res,req) {
    try{
        return new Promise((resolve, reject) => {
            let body = ""
            req.on("data",(chunk) => {
                body += chunk.toString()
            })

            req.on("end", () => {
                resolve(body)
            })

        })
    }catch(err){
        reject(err)
        
    }
}

module.exports = {
    writeDatafile, bodyPostdata
}