// let user={
//   name:"saqib",
//   age:20,
//   year:2024
// }
// function handleobj(anyobject)
// {
//   console.log(`username is ${anyobject.name} and his age is ${anyobject.age}`);
// }
// handleobj(user);


/****************OR******************* */

function handleobj(anyobject)
{
  console.log(`username is ${anyobject.name} and his age is ${anyobject.age}`);
}
handleobj({
  name:"saqib",     //WE CAN CREATE AN OBJ DURING THE FUNCTION CALLING
  age:20,
  year:2024
});




function calculatecart(val1,val2,...val) {//...val creates array
  return val;
}

console.log(calculatecart(200,300,569,379,25,35));



add(5)                  //It will show an error bcoz
let add=function(num){  //Cannot access 'add' before initialization
  return num+2
}
