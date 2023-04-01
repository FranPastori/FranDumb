const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

noButton.addEventListener("mouseover", function() {
  const newPosX = Math.floor(Math.random() * (window.innerWidth - 100));
  const newPosY = Math.floor(Math.random() * (window.innerHeight - 50));
  noButton.style.left = newPosX + "px";
  noButton.style.top = newPosY + "px";
});

yesButton.addEventListener("click", function() {
  alert("Eu sabia!");
});
