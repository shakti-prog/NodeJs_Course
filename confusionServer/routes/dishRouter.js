const express = require('express');
const bodyParser = require('body-parser');


const dishRouter = express.Router();

dishRouter.use(bodyParser.json());


dishRouter.route('/')
.all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
}).
get((req,res,next)=>{
     res.end("Will send you all dishes");
   })
.
post((req,res,next)=>{
    res.end('Will add' + req.body.name + "to the list" + req.body.description);
   })   
.
put((req,res,next)=>{
      res.statusCode = 403;
      res.end("Can't do this operation"); 
})
.delete((req,res,next)=>{
      res.end("Will delete all the dishes");
})

dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
  }).
  get((req,res,next)=>{
    res.end("Will send " + req.params.dishId);
}).
post((req,res,next)=>{
    res.statusCode = 403;
    res.end("Cannot do this");
}).
put((req,res,next)=>{
    res.end("Will update" + req.params.dishId);
})
.delete((req,res,next)=>{
    res.end("Will delete this dish " + req.params.dishId);
})



module.exports = dishRouter;