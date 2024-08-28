let a=[1,2,3,4,5,6];

let b=[7,8,9];

// a.push(b)
// console.log(a);

//IN THIS THE 2 ARRAYS ARE NOT MERGED

// [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ] THE 2ND ARRAY IS TOTALLY WORKING AS ONLY ONE INDEX i.e 6  

//WE CAN USE CONCAT
// let c=a.concat(b);
// console.log(c);

//IT HAS TO BE STORED IN AN NEW ARRAY


//WE CAN DO WITH USING SPREAD OPERATOR

// let d=[...a,...b]
// console.log(d);

let e=[1,2,3,[4,5,6],[2,3,[7,8,9]]];

let res=e.flat(2);//flat(depth) will resolve all the array inside array into a new array when depth is provided.Depth can be 'Infinity'
console.log(res);



console.log(Array.isArray('saqib'));//it will check whether 'saqib' is present in an array or not


console.log(Array.from('khan'));//It converts the provided item it an array

//EXCEPTIONAL CASE

console.log(Array.from({name:"saqib"}));// it will give an empty arr bcoz it doesnot know which has be to converted into arr whether it is key or value one


     
let s1=100;
let s2=200;
let s3=369;

console.log(Array.of(s1,s2,s3));//it coverts the s1,s2,s3 into an array





