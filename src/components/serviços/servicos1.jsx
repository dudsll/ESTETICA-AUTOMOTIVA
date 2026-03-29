function Servicos1() {
  return (
    <div className="servicos1">
      <fieldset className="titulo-servicos">
        <legend>Nossos serviços</legend>
        <div className="servicos2">
          <div className="lista-servicos">
            <ul>
              <li>
                <button className="buttonC" data-img="assets/imgs/imagem8.jpg">
                  Lavagem Completa
                </button>
              </li>
              <li>
                <button className="buttonC" data-img="assets/imgs/imagem2.jpg">
                  Polimento e Cristalização
                </button>
              </li>
              <li>
                <button
                  className="buttonC"
                  data-img="assets/imgs/WhatsApp Image 2026-03-19 at 08.39.11.jpeg"
                >
                  Higienização Interna
                </button>
              </li>
              <li>
                <button className="buttonC" data-img="assets/imgs/clio2.jpeg">
                  Polimento Técnico
                </button>
              </li>
              <li>
                <button className="buttonC" data-img="assets/imgs/imagem6.jpg">
                  Vitrificação de Pintura
                </button>
              </li>
              <li>
                <button className="buttonC" data-img="assets/imgs/imagem5.jpg">
                  Revitalização de Faróis
                </button>
              </li>
              <li>
                <button className="buttonC" data-img="assets/imgs/imagem7.jpg">
                  Proteção Cerâmica
                </button>
              </li>
            </ul>
          </div>
          <div className="container-imagem">
            <img
              id="imagemPrincipal"
              className="imagem-servico"
              src="assets/imgs/eduardo_garage_logo.png"
              alt="Imagem de serviço de estética automotiva"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

const imagem = document.getElementById("imagemPrincipal");
const botoes = document.querySelectorAll("button.buttonC");

if (!imagem || botoes.length === 0) {
  return;
}

function resolveAssetPath(rawPath) {
  if (!rawPath) return "";

  // Corrige caminhos herdados como "../assets/..." em páginas publicadas no GitHub Pages.
  const normalizedPath = rawPath.replace(/^\.\.\//, "");

  try {
    return new URL(normalizedPath, window.location.href).toString();
  } catch {
    return normalizedPath;
  }
}

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    imagem.src = resolveAssetPath(botao.dataset.img);
  });
});

export default Servicos1;
