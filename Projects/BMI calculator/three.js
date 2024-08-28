let form = document.querySelector('form')
// console.log(form);

form.addEventListener('submit',function(e){
  // console.log(e);
  // console.log(e.target);
  e.preventDefault() // it stops the form from submitting and also prevents from reloading which is the default behaviour of browser
  
  let height=parseInt(document.querySelector('#height').value)
  let weight=parseInt(document.querySelector('#weight').value)
  let result=document.querySelector('#results')
  let bmi;

  if(height==='' || height < 0 || isNaN(height))
  {
    result.innerHTML='please give valid number'
  }
  else if(weight==='' || weight < 0 || isNaN(weight))
  {
    result.innerHTML='please give valid weight'
  }
  else{
    bmi=(weight/((height*height)/10000)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>` ;
  }
  if(bmi < 18.6)
  {
    document.querySelectorAll('.ranges').forEach( (p) => p.remove() )
    let weightInfo=document.createTextNode("You are under weight")

    // console.log(form.appendChild(weightInfo));

    form.appendChild(weightInfo)

    //to show in webpage

    document.form.appendChild(form)

  }
  else if(bmi >= 18.6 && bmi <=24.9)
  {
    document.querySelectorAll('.ranges').forEach( (p) => p.remove() )
    let weightInfo=document.createTextNode("You are in normal condition")
    form.appendChild(weightInfo)

    //to show in webpage

    document.form.appendChild(form)

  }
  else{
    document.querySelectorAll('.ranges').forEach( (p) => p.remove() )

    let weightInfo=document.createTextNode("You are over weight")

    // console.log(form.appendChild(weightInfo));

    form.appendChild(weightInfo)

    //to show in webpage

    document.form.appendChild(form)
  }
})
