let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");

btn.addEventListener("click", function(){
  output.textContent = `Здравствуйте, ${name.value} ${surname.value}!`
});