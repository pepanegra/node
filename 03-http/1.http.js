const http = require("node:http")
const fs = require("node:fs");

const server = http.createServer((req,res) => {
    if ( req.url === "/") {
        res.setHeader("Content-type", "text/html; charset=utf-8")
        res.end("<h1>Hello this is my frist web page!</h1>")
    }else if (res.url === "/imagen") {
        res.end("<p>Hello i am jonathan</p>") 
        fs.readFile("./imagen.png", (err, data) => {
         if(err){
            res.end("<h1>Internal error</h1>")
            res.statusCode = 500
            
         }else{
            res.setHeader("content_Type", "image/png")
            res.end(data)
         }
        }) 
    }
    
})

server.listen(3000, () => {
   console.log(`http://localhost:3000`)
})

