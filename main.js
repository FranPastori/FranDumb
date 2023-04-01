const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

// Adiciona um evento de mouseover no botão "Não"
noButton.addEventListener("mouseover", function() {
  // Cria valores aleatórios para as coordenadas X e Y da nova posição do botão
  const newPosX = Math.floor(Math.random() * (window.innerWidth - 100));
  const newPosY = Math.floor(Math.random() * (window.innerHeight - 50));
  
  // Atualiza a posição do botão "Não" para a nova posição aleatória
  noButton.style.left = newPosX + "px";
  noButton.style.top = newPosY + "px";
});

// Adiciona um evento de clique no botão "Sim"
yesButton.addEventListener("click", function() {
  // Exibe a mensagem "Eu sabia!"
  alert("Eu sabia!");
});
