let arr=[1,2,3,4,5,6]

//for-of loop

for (const value of arr) {
 // console.log(value);
  
}
// for (const element of object) {
  
// }  => here object means on which thing we have to apply loop........... 'element' can be changed



//for-of loop can't be applied into object

let obj={
  name:"saqib",
  age:20
}
// for (const myobj of obj) {
//   console.log(myobj);
  
// }//undefined


//for-in loop can be applied into object

for (const saqib in obj) {
 // console.log(saqib);//from this we got only keys
  
 // console.log(obj[saqib]);
  //and from this we got only values
}


//FOR-EACH LOOP

let num=[53,26,78,36,91,25]

num.forEach( function (val){
 // console.log(val);
  
} )

//INSIDE THE () IT IS CALL BACK FUNCT SO IT DOENOT HAVE FUNCTION NAME.IT WILL AUTOMATICALLY GOES TO EACH VALUE OF NUM ARRAY


//as arrow function

num.forEach( (item) => {
  //console.log(item);
  
} )

// num.forEach( function (val){
//   // console.log(val);
   
//  } ) ANOTHER WAY OF WRITING THIS

function digit(value){
  //console.log(value);
  
}

num.forEach(digit)//only reference passing of the function





//FOR-EACH LOOP IN ARRAY OF OBJECTS

let coding=[
  {
    languagename: "Javascript",
    languagefile:"js"
  },

  {
    languagename: "Java",
    languagefile:"java"
  },

  {
    languagename: "python",
    languagefile:"py"
  }
  
]

coding.forEach( (lang) => {
 // console.log(lang.languagename);
  
} )



//THIS FOR-EACH LOOP NEITHER STORE NOR RETURNS ANYTHING

let values=num.forEach( (item) => {
//  console.log(item);
  //return item;
  //o/p => undefined
} )

//console.log(values);
//o/p => undefined


//to return the values we can use filter() operator .it is also a callback function

//but this filter operation needs the condition and which will be true then taht will be returned

let mynums=[1,2,3,4,5,6,7,8,9,10]

let res=mynums.filter( (num1) => num1 > 5 )

console.log(res);





