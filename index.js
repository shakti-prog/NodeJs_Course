var rect = require('./rectangle');

function solveRect(l,b){
 console.log("Solving for rectangle")
 rect(l,b,(err,rectangle)=>{
     if(err){
         console.log(err.message);
     }
     else{
         console.log("Area is" ,rectangle.area());
         console.log("Perimeter is ",rectangle.perimeter());
     }

 })

}

solveRect(5,9)
solveRect(-3,4);