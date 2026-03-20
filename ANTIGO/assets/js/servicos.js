export function initServicos() {
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

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      imagem.src = resolveAssetPath(botao.dataset.img);
    });
  }); 
}