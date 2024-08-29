let a=100;
let b=new Number(400.63664);//It specificily defines that it is now a number
console.log(a);  //100
console.log(b);  //[Number: 400.63664]
console.log(typeof a);  //number
console.log(typeof b);  //object

console.log(b.toFixed(2));// After the point it will give upto provoided no. given by u 


let c=10000000;
console.log(c.toLocaleString('en-IN'));
//Generally given as per US standard but convert in Indian std 'en-IN'



