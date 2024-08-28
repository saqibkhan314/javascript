 let num=[1,2,3]
 //using function
//  let result=num.reduce( function (accumulator,val) {
//   console.log(`acc: ${accumulator} val: ${val}`);
  
//   return accumulator + val;
//  },0 )

//  console.log(result);
 

//in this reduce accumulator and val is there . here 0 is defined as the value of accumulator. In the entire loop acculmulator value will be 0 for the first time only and the added value will be stored in the accumulator only. val defined as the array num


//using arrow function

let ans=num.reduce( (accumulator,curval) => {
  return accumulator + curval
},0 )

console.log(ans);
