let randomColor = function() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i <6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)]
  }
  return color;
}
console.log(randomColor());

let changedColor
function colorChanging() {
  
    changedColor = setInterval(function(){
    document.body.style.backgroundColor = randomColor()
  },2000);
}

function stopChanging() {
  clearInterval(changedColor)
}

document.querySelector("#start").addEventListener("click",colorChanging)
document.querySelector("#stop").addEventListener("click",stopChanging)