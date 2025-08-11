import { useEffect, useState } from "react";
import api from "../servicos/api";
import CardPersonagem from "../componentes/CardPersonagem";
import type { Personagem } from "../tipos/personagem";

import './Personagens.css';

interface PersonagensProps {
  darkMode: boolean;
}

const Personagens = ({ darkMode }: PersonagensProps) => {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);

  useEffect(() => {
    api.get("/character").then((res) => {
      setPersonagens(
        res.data.results.map((p: any) => ({
          id: p.id,
          nome: p.name,
          status: p.status,
          especie: p.species,
          tipo: p.type,
          genero: p.gender,
          origem: { nome: p.origin.name, url: p.origin.url },
          localizacao: { nome: p.location.name, url: p.location.url },
          imagem: p.image,
          episodios: p.episode,
        }))
      );
    });
  }, []);

  return (
    <div>
      <h2 className={`titulo-personagens ${darkMode ? "escuro" : "claro"}`}>Personagens</h2>
      <div className="lista-personagens">
        {personagens.map((personagem) => (
          <CardPersonagem
            key={personagem.id}
            personagem={personagem}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Personagens;
