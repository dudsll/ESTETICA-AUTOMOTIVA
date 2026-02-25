export function initMenu() {
  const menu = document.getElementById("menu");
  const botao = document.getElementById("menu-button");
  const body = document.body;
  const overlay = document.getElementById("overlay");

  botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    body.classList.toggle("no-scroll");
    overlay.classList.toggle("active");
  }); 
}