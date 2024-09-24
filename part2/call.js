function setUserName(username) {
  this.username = username
  console.log("hello");
  
}

function createUser(username, email, password){
  setUserName.call(this,username)
  this.email = email,
  this.password = password
}

let data = new createUser("saqib","saqib@gmail.com","1234")

console.log(data);


//setUserName(createUser) => by writting only this we are checking that does username is shown or not.....no it's not shown....so after applying ".call" it is now called as "hello" is printed but still the the username isnot shown bcoz ".call" is only holding the reference so to show we have to give "this" as  giving the current context .call(this,username)