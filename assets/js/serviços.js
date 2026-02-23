const imagem = document.getElementById("imagemPrincipal");
const botoes = document.querySelectorAll("button.buttonC");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    imagem.src = botao.dataset.img;
  });
}); 