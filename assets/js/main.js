const imagem = document.getElementById("imagemPrincipal");
const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    imagem.src = botao.dataset.img;
  });
});

const imgs = document.querySelectorAll('.slides img');
const prox = document.querySelector('#prox');
const ant = document.querySelector('#ant');
let i = 0;

function changeSlide(n) {
  imgs[i].classList.remove('active');
  i = (i + n + imgs.length) % imgs.length;
  imgs[i].classList.add('active');
}

prox.addEventListener('click', () => changeSlide(1));
ant.addEventListener('click', () => changeSlide(-1));

setInterval(() => changeSlide(1), 5000);

const menu = document.getElementById("menu");
const botao = document.getElementById("menu-button");

botao.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});