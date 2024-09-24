class user{
  constructor(username,email,password){
    this.username = username
    this.email = email
    this.password = password
  }
  encrptPassword(){
    return `${this.password}abc`
  }
  changeUserName(){
    return `${this.username.toUpperCase()}`
  }
}

let data = new user("saqib","saqib@gmail.com","1234")
//console.log(data);
//user { username: 'saqib', email: 'saqib@gmail.com', password: '1234' }

console.log(data.encrptPassword());
//1234abc

console.log(data.changeUserName());
// SAQIB