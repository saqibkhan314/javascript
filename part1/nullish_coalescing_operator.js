//nullish_coalescing_operator(??) : null undefined

let val1=5 ?? 10
console.log(val1);
console.log(val1);
console.log(val1);
console.log(val1);



let val2= null ?? 12

console.log(val2);



let val3= undefined ?? 12 

console.log(val3);



let val4=null ?? undefined ?? 10 ?? 20

console.log(val4);

//always first value will be assigned except null or undefined