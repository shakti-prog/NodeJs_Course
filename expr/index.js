const express = require('express');
const http = require('http');
const port = 3001;
const hostname = 'localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const dishRouter = require('./routes/dishRouter');


app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json());



app.use('/dishes',dishRouter);


app.get('/dishes/:dishId',(req,res,next)=>{
    res.end("Will send " + req.params.dishId);
})

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Cannot do this");
})

app.put('/dishes/:dishId',(req,res,next)=>{
    res.end("Will update" + req.params.dishId);
})

app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end("Will delete this dish " + req.params.dishId);
})


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