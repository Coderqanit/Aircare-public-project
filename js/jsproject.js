let color_arrary = ["blue", "red", "green"];

const body = document.querySelector("body");

const button = document.querySelector(".click-btn");

function Getrandom() {
  k = Math.floor(random() * color_arrary.length);
 return body.style.backgroundColor = "Getrandom";
}


button.addEventListener("click", Getrandom);


 
