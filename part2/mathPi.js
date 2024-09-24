

// console.log(Math.PI);

// let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")//getOwnPropertyDescriptor => it says the property of PI from the math library

// console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,  //hard coded can't be change the 
//   enumerable: false, //value of pi
//   configurable: false
// }

let user = {
  name:"saqib",
  age:20
}
//we can see the property of this user object
// console.log(Object.getOwnPropertyDescriptor(user)); //undefined=> bcoz we have specify that whose property we want to see

// console.log(Object.getOwnPropertyDescriptor(user,"name"))

// {
//   value: 'saqib',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//now we can also change the property

Object.defineProperty(user,"name",{
  writable: false,
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"))
// {
//   value: 'saqib',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }
