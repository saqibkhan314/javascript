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
class teacher extends user {
  constructor(username,email,password) {
    super(username, email, password);
    this.email = email
    this.password = password
  }
}

let data = new teacher("saqib","saqib@gmail.com","1234")

console.log(data.encrptPassword());


console.log(data.changeUserName());  