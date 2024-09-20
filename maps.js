let country=new Map();
//It is an object.It holds key-value pairs.It doesnot allow duplicate elements

//inserting element

country.set('IN',"india")
country.set('IN',"Odissa")
country.set('USA',"usa")

// console.table(country);


for (const cname of country) {
  //console.log(cname);
  
}//[ 'IN', 'Odissa' ]
//[ 'USA', 'usa' ] it is in the form of array


//in the form of key-value

for (const [key,value] of country) {
  // console.log(key,value);
  
}


//CHAINING

let num=[1,2,3,4,5,6,7,8,9,10];

let result=num.map( (val) => {return val*10} ).map( (val) => { return val + 1} ).filter( (num) => {return num > 50} )

console.log(result);

//current num value will be passed forwad for other calculation and at last it will be returned