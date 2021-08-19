const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());



leaderRouter.route('/').all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next)=>{
    res.end("Will send you all leaders");
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
     res.end("Will delete all the leaders");
})


leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
   res.statusCode = 200;
   res.setHeader('Content-Type','text/plain');
   next();
 }).
 get((req,res,next)=>{
   res.end("Will send " + req.params.leaderId);
}).
post((req,res,next)=>{
   res.statusCode = 403;
   res.end("Cannot do this");
}).
put((req,res,next)=>{
   res.end("Will update" + req.params.leaderId);
})
.delete((req,res,next)=>{
   res.end("Will delete this promotion " + req.params.leaderId);
})

module.exports = leaderRouter;