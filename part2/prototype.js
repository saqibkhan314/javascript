// let name = "saqib   "
// console.log(name.length)//8

// console.log(name.trim().length);


// //challenge is do this  (console.log(name.trim().length);) same thing with the help of "trueLength"

// console.log(name.trueLength);//but it is coming "undefined"


let film = ["DDLJ","jawan"]

let power = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower:function(){
    console.log(`spider's power is: ${this.spiderman}`);
    
  }
}

//we want anything inside the object 

Object.prototype.saqib = function(){
  console.log("saqib is present in all obj");
  
}

// power.saqib()

// film.saqib() //we can access array bcoz we have used top hierarchial power i.e Object

//Object.prototype => this is the base object from which all other object inherits. It is the top of prototype chain. now due to this we can  access anything like array,function,string using .saqib() as  we have used top hierarchial power i.e Object

//When we write "Object.prototype" then that method [here: saqib()]is available to all objects


//checking vice-versa can giving power to array can we access the object

Array.prototype.khan = function(){
  console.log("hello world");
  
}

khan.film()//it will show the o/p => hello world as power is only given to the array
khan.power()//error as power is not given to the object,function,strings