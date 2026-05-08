//nullish_coalescing_operator(??) : null undefined

let val1=5 ?? 10
console.log(val1); // 5 will be assigned to val1 because it is not null or undefined
// 10 will not be assigned because it is not the first value
console.log(val1);
console.log(val1);
console.log(val1); //



let val2= null ?? 12

console.log(val2); //12



let val3= undefined ?? 12 

console.log(val3); //12



let val4=null ?? undefined ?? 10 ?? 20

console.log(val4);

//always first value will be assigned except null or undefined