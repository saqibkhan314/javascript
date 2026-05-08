//Two ways to declare the object 
//=> literals
//=> constructors

// when we create an object from constructor then SINGLETON OBJECT is created

//OBJECT LITERALS

let user={
  name:"saqib"
}

//to accsee obj

// console.log(user["name"]);
        //OR
// console.log(user.name);

// Symbol() =====>>>>> It is used to create unique and hidden object keys. Even if two symbols have the same description, they are not equal. 
let sym=Symbol()

//ques => to show symbol in the object and it should be working as key

let user2={
  name:"khan",
  [sym]:"abcd"  // to denote symbol we have to use square brackets
}
console.log(user2[sym]); //abcd
console.log(typeof sym);  //symbol

let sym1 = Symbol('id');
let sym2 = Symbol('id');

console.log(sym1 === sym2); // false

Object.freeze(user2);//if anyone further changes user2 then it will not change
user2.name="saqib"
console.log(user2); //{name: 'khan', Symbol(): 'abcd'} 







//To add functions in objects

user2.greeting=function() {
 // console.log(`hello user ${this.name}`);//'this' references from the object 
  
}

// console.log(user2.greeting);//[Function (anonymous)]
//  console.log(user2.greeting());




