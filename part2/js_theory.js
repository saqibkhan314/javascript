//js has the default behaviour which is prototypal means when js does not find something which it is searching for then it goes more deeper and deeper(means it access it's parents,grandparents etc) to find until it gets the null value due to this feature js "this" etc and due to this reason we can't access the "this" keyword inside an arrow function

function multiply(num) {
  return num*5;
}
multiply.power = 2;//here function is working as object

console.log(multiply.power);
console.log(multiply(2));//here function working as function

