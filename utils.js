const fs = require("fs")


async function writeDatafile(filename, content){
    fs.writeFileSync(filename, JSON.stringify(content), "utf-8", (err) => {
        console.error(err);
        
    })
}

function bodyPostdata(req,res) {
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