module.exports = (x,y,callback) =>{
 if(x<=0 || y<=0){
     setTimeout(()=>
     callback(new Error("Dimensions cannot be less than zero"),null),    
     2000);
 }
 else{
     setTimeout(()=>
     callback(null,{
         perimeter: ()=>(2*x + 2*y),
         area: ()=>(x*y)
     }),
     2000)
 }
}