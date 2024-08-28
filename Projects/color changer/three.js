let buttons=document.querySelectorAll('.button')
//querySelectorAll bcoz we have to perform task in all
//console.log(buttons);//provides all buttons nodelist

// we want to change color in the body wp 
 
let body=document.querySelector("body")// here body is a tagname 

//event is everything what is happening in the webpage like moving cursor , clicking buttons etc.

//EVENT LISTENER => An event listener in JavaScript is a function that waits for an event to occur on a particular element and then executes a specified piece of code in response to that event

//button.addEventListener('click',function(e)) this Evnt lstnr is for clicking means when we click any buttons then this function(e) should work

//  .target helps to specifiy the pinpoint location where the source of event is occuring

buttons.forEach( (button) => {
    //  console.log(button);
      button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='grey'){
          body.style.backgroundColor="grey"
        }
        if(e.target.id==='white'){
          body.style.backgroundColor="white"
        }
        if(e.target.id==='blue'){
          body.style.backgroundColor="blue"
        }
        if(e.target.id==='yellow'){
          body.style.backgroundColor="yellow"
        }
      })
} ) 
