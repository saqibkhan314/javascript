//Immediately Invoked Function Expressions (IIFE)
// it is used when we want to invoke any function immediately
//we use IIFE bcoz we have the problem from the pollution of global scope

//METHOD TO WRITE IIFE

(function name() {
  console.log('DB connected');                  //THIS IS NAMED IIFE
})();  //; to end context as it doesn't know 


//FOR NORMAL FUNCTION
//()()

//FOR ARROW FUNCTION
( (user) =>{
  console.log(`saqib ${user}`);
  
} )('khan');


