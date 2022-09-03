const http = require("http");
const { Server } = require("tls");

const server = http.createServer((req , res ) =>{
    if(req.url=="/"){
        res.end("jigar");
    }
    else if(req.url=="/about"){
        res.end("about")
    }
}) 

server.listen(8000,"127.0.0.1",() =>{
    console.log("server is running");
})