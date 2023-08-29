const http = require("node:http")

const server = http.createServer((req,res) => {
    if ( req.url === "/") {
        res.setHeader("Content-type", "text/html; charset=utf-8")
        res.end("Hello this is my frist web page!")
    } else {
        res.statusCode = 404
        res.end("<p>not found</p>")
    }
})

server.listen(3000, () => {
   console.log(`http://localhost:3000`)
})

