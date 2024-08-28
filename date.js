let mydate = new Date();
// console.log(mydate);
// console.log(typeof mydate);//object

// console.log(mydate.toString());
// console.log(mydate.toLocaleString());

// console.log(mydate.toJSON());


let create=new Date(2024,8,11);
// console.log(create.toString());

/*****TIMESTAMP ******** */

let timestamp=Date.now();

console.log(timestamp);//o/p is in Milliseconds

console.log(timestamp/1000);// it is in second bt in decimal

console.log(Math.floor(timestamp/1000));

