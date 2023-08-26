const { log } = require("node:console");
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hola mundo");
});

server.listen(4000, () => {
    console.log(`hola http://localhost:4000`);
});
