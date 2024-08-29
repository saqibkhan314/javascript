let user={
  name:"saqib",
  age:20,
  welcome: function(){
    console.log(`${this.name} welcome`);//if we want to refer current context
    console.log(this);
                                        //then this keyword can be used
}
}
user.welcome()
user.name="khan"
user.welcome()
console.log(this);  //{} empty object bcoz we are using this in node env but if we do console.log(this) in the browser then it's global object is 'window' and if use this only inside a funct then we get some global values




//WE CAN'T USE 'THIS' INSIDE ONLY AN FUNCTION IT SHOULD BE ALSO PRESENT INSIDE THE OBJECT OTHERWISE IT WILL SHOW UNDEFINED

// function f() {
//   let name="saqib"
//   console.log(this.name);
  
// }
// f()   //UNDEFINED


//DECALRING AN ARROW FUNCTION
// let user=() => {
//     let name="saqib"
//     console.log(this.name);  //using this it is showing undefined
// }
// user()



// //basic arrow funct declaration

let add = (num1,num2) => {
    return num1+num2
}
console.log(add(2,2));
 

// //another way of declaring it is implicit return

let add2 = (num1,num2) => num1 + num2//no need to write return statement
console.log(add2(2,4));


// /**********OR********************** */

let add3 = (num1,num2) => (num1 + num2)//no need to write return 
console.log(add3(2,4));                //statement bcoz if we give currly braces() then we don't have to write return 

// /************************************************************* */

// //if we want to declare objects in arrow funct then we have to write inside the parenthesis()

let add4 = (num1,num2) => ({username:"saqib"})
console.log(add4(2,4));  
