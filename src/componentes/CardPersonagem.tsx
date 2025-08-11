import { Link } from "react-router-dom";
import type { Personagem } from "../tipos/personagem";
import "./CardPersonagem.css";

interface CardPersonagemProps {
  personagem: Personagem;
  darkMode: boolean;
}

const CardPersonagem = ({ personagem, darkMode }: CardPersonagemProps) => (
  <Link
    to={`/personagem/${personagem.id}`}
    className={`card-personagem ${darkMode ? "escuro" : "claro"}`}
  >
    <img src={personagem.imagem} alt={personagem.nome} />
    <h3>{personagem.nome}</h3>
    <p>Status: {personagem.status}</p>
    <p>Espécie: {personagem.especie}</p>
  </Link>
);

export default CardPersonagem;
