const express = require('express');
const http = require('http');
const port = 3001;
const hostname = 'localhost';
const morgan = require('morgan');




const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'))

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Good</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port,hostname,()=>{
 console.log("Server is running" + " " + port);
})