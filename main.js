const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

noButton.addEventListener("mouseover", function() {

console.log(" o mouse esta sobre o botão")
    
 const newPosX = Math.floor(Math.random() * (window.innerWidth - 900));
 const newPosY = Math.floor(Math.random() * (window.innerHeight - 450));
  noButton.style.left = newPosX + "px";
  noButton.style.top = newPosY + "px";
});

yesButton.addEventListener("click", function() {
  alert("Eu sabia!");
});
