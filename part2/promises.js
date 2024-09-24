//A Promise in JavaScript is like a "promise" that something will happen in the future.it is used to handle the Asynchronous operation such as fetching data from server, without blocking the main code. It has 2 things (resolve,reject) and it is a callback function

//resolve => when u call resolve it means the asynchronous operation (like a network request or a database call) was successful. then it will pass that value to the next part of promise chain

//reject => When you call reject, it means the operation failed, and you can pass an error message 

//What does "consume a promise" mean?

//To "consume" a promise means to handle the result or error of that promise after it has finished its operation. You consume a promise using the .then() and .catch() methods:

// .then(): Executes when the promise is resolved (success).
// .catch(): Executes when the promise is rejected (failure).

//we done the async task i.e "Async task completed" but "promise consumed" is not displayed so we have to connect reolve and .then() with resolve() method

let promiseOne =  new Promise(function(resolve,reject){
  // u can do async task like DB calls, crptography, network

   setTimeout(function(){
    console.log("Async task completed");
    resolve(); // this funct tells the promise that everything has been done successfully.
   },1000)
});

promiseOne.then(function(){
  console.log("promise consumed");
  
})

//o/p : 

//Async task completed
// promise consumed



//to pass value from Promise() to .then() then we can write inside the resolve()
let promiseTwo =  new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("Async task completed");
    resolve({
      username: "saqib khan",
      age: 20
    });
   },1000)
});

promiseTwo.then(function(user){
  console.log(user);
  //Async task completed
// { username: 'saqib khan', age: 20 }

console.log(user.username);
//Async task completed
// saqib khan
})


let promiseThree =  new Promise(function(resolve,reject){
 
    
  setTimeout(function(){
   let error = false;
   if(!error){
     resolve({
       username: "saqib khan",
       age: 20
     })
   }
   else{
     reject("Error: Something went wrong");
   }
  },1000)
});

promiseThree.then(function(user){
 return user.username;
 
}).then( (userData) => {
 console.log(userData);
 
}).catch( (err) => {
 console.log(err);
 
}).finally( () => console.log("task completed")
 )

//o/p: saqib khan
//task completed



// we can handle all this request using async and await 

//async => When you add the word async in front of a function, you're telling JavaScript: 
//"This function will always return a  promiseFour."

// await=> it makes the code pause and wait for the promise to finish

let promiseFour =  new Promise(function(resolve,reject){
   setTimeout(function(){
   let error = false;
   if(!error){
     resolve({
       username: "rohit sharma",
       age: 37
     })
   }
   else{
     reject("Error");
   }
  },1000)
});

async function consumePromiseFour(){
  let response =  await promiseFour
  console.log(response);
  
}

consumePromiseFour()

//.fetch() =>  allows you to make network requests, such as getting data from a server or sending data to a server. It is commonly used to fetch data from APIs (like websites or web services).

 fetch('https://api.example.com/data')  
  .then(response => response.json())  
  .then(data => console.log(data))     
  .catch(error => console.error('Error:', error));  


data()



  //you use .fetch('URL') to request data from the server at the given URL.

  //.fetch() returns a promise, so you use .then() to wait for the server’s response.

  //You usually want the response as JSON (a format for data), so you convert it using response.json()

  //: If something goes wrong (like a network error), .catch() can handle it.