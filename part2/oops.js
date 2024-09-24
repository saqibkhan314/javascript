//js have the classes but it is not an object oriented  programming language rather it is a protype based inheritance(syntax based => enhances code readablity) 

//object =>  collection of properties(variables or constants) and methods

// let user = {
//   username: "saqib",
//   loginCount: 8,
//   signedIn: true
// }

// console.log(user.username);

// // new keyword => used to create context or instance. it is only constructor function

function user(username,loginCount) {
  this.username = username
  this.loginCount = loginCount

  return this //total object is pass on. return is optional as implicitly it returns
}

// this.username => this one is variable
//username => storing the value of username in the variable declared



//problems when not writting "new"

let userOne = user("saqib", 12, true);
let userTwo = user("rohit", 11, false);

console.log(userOne);

//all the values of userTwo will be overwrite in place of values of userOne

//so that why we use "new" as it provides a new instance so we can work freely

//new => when we use "new" keyword then it it creates an empty object which is called instance