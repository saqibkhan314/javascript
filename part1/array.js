let a=[0,1,3,6,25,36,24,"saqib",true,null]

// console.log(a[3]);


//ARRAY METHODS

// a.push('khan');//insert element from last
// console.log(a);

// a.pop();
// console.log(a);

// a.unshift(10);// INSERT THE ELEMENT FROM FIRST AND ALL OTHER ELEMENTS ARE SHIFTED
// console.log(a);


// a.shift();
// console.log(a);


let newarr=a.join();//JOINS THE ARRAY AND CONVERT IT INTO STRING

console.log(newarr);


/****SLICE AND SPLICE****** */


let b=[1,6,8,9,4];
// console.log(b.slice(1,3));
// console.log(b);
 
//IN slice() THERE IS STARTING AND ENDING INDEX BUT HERE ENDING VALUE IS NOT INCLUDED.BUT IN SLICE ORIGINAL ARRAY IS NOT CHANGED

console.log(b.splice(1,3));
console.log(b);

// IN splice() THE ENDING VALUE IS ALSO INCLUDED AND HERE THE ORIGINAL ARRAY IS ALSO CHANGED

