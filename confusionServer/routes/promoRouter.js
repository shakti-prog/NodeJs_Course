const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();
promoRouter.use(bodyParser.json());


promoRouter.route('/')
.all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
}).
get((req,res,next)=>{
     res.end("Will send you all promotions");
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
      res.end("Will delete all the promotions");
})


promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
  }).
  get((req,res,next)=>{
    res.end("Will send " + req.params.promoId);
}).
post((req,res,next)=>{
    res.statusCode = 403;
    res.end("Cannot do this");
}).
put((req,res,next)=>{
    res.end("Will update" + req.params.promoId);
})
.delete((req,res,next)=>{
    res.end("Will delete this promotion " + req.params.promoId);
})



module.exports = promoRouter;