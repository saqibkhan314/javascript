let clock=document.querySelector('#clock')
//console.log(document.querySelector('#clock'));

// let date=new Date();
// console.log(date.toLocaleTimeString());


setInterval( () => {
  let date=new Date();
  // console.log(date.toLocaleTimeString());
  // let time=document.createTextNode(`${date.toLocaleTimeString()}`)
   
  // console.log(clock.appendChild(time));

  // clock.appendChild(time)
  
   clock.innerHTML=date.toLocaleTimeString();

},Infinity)


// setInetrval(function(),delay) used to repeatedly calls a function with fixed time delay between each call

