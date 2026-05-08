let user=new Object();//constructor
// console.log(user);//empt {}

user.name="saqib"
user.age=20
// console.log(user);


//combining obj

let obj1={
  1:"a",
  2:"b"
}

let obj2={
  3:"c",
  4:"d"
}

let obj3= Object.assign(obj1,obj2)
console.log(obj3); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}


// //in place of Object.assign() we can use spread operator

let obj4={...obj1,...obj2}
console.log(obj4); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}


console.log(Object.keys(user));//it stores the keys in an array and returns it 

// ['name', 'age']

console.log(Object.values(user))//it stores the values in an array and returns it 

// ['saqib', 20]

//DESTRUCTURING OF OBJECTS

let {name,age}=user
// console.log(name,age);
