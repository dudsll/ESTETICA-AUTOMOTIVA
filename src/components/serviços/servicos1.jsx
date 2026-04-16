import { useState } from "react";
import "./servicos1.css";
import imagem8 from "../../assets/imagem8.jpg";
import imagem2 from "../../assets/imagem2.jpg";
import higienizacaoInterna from "../../assets/WhatsApp Image 2026-03-19 at 08.39.11.jpeg";
import clio2 from "../../assets/clio2.jpeg";
import imagem6 from "../../assets/imagem6.jpg";
import imagem5 from "../../assets/imagem5.jpg";
import imagem7 from "../../assets/imagem7.jpg";
import logo from "../../assets/eduardo_garage_logo.png";

const servicos = [
  { label: "Lavagem Completa", img: imagem8 },
  { label: "Polimento e Cristalização", img: imagem2 },
  {
    label: "Higienização Interna",
    img: higienizacaoInterna,
  },
  { label: "Polimento Técnico", img: clio2 },
  { label: "Vitrificação de Pintura", img: imagem6 },
  { label: "Revitalização de Faróis", img: imagem5 },
  { label: "Proteção Cerâmica", img: imagem7 },
];

function Servicos1() {
  const [imagemAtual, setImagemAtual] = useState(logo);

  return (
    <div className="servicos1">
      <fieldset className="titulo-servicos">
        <legend>Nossos serviços</legend>
        <div className="servicos2">
          <div className="lista-servicos">
            <ul>
              {servicos.map((servico) => (
                <li key={servico.label}>
                  <button
                    className="buttonC"
                    onClick={() => setImagemAtual(servico.img)}
                  >
                    {servico.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="container-imagem">
            <img
              id="imagemPrincipal"
              className="imagem-servico"
              src={imagemAtual}
              alt="Imagem de serviço de estética automotiva"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Servicos1;
