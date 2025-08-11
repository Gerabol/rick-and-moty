import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../servicos/api";
import "./EpisodioDetalhes.css";

interface PersonagemEpisodio {
  id: number;
  name: string;
  image: string;
  status: string;
  location: {
    name: string;
  };
}

interface Episodio {
  id: number;
  nome: string;
  dataExibicao: string;
  codigo: string;
  personagens: string[];
}

interface EpisodioDetalhesProps {
  darkMode: boolean;
}

const EpisodioDetalhes = ({ darkMode }: EpisodioDetalhesProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episodio, setEpisodio] = useState<Episodio | null>(null);
  const [personagemInfos, setPersonagemInfos] = useState<PersonagemEpisodio[]>([]);

  useEffect(() => {
    api.get(`/episode/${id}`).then(res => {
      const e = res.data;
      setEpisodio({
        id: e.id,
        nome: e.name,
        dataExibicao: e.air_date,
        codigo: e.episode,
        personagens: e.characters,
      });
      const personagemIds = e.characters.map((u: string) => u.split("/").pop()).join(",");
      if (personagemIds) {
        api.get(`/character/${personagemIds}`).then(pRes => {
          let data = pRes.data;
          if (!Array.isArray(data)) data = [data];
          setPersonagemInfos(data);
        });
      }
    });
  }, [id]);

  if (!episodio) return <p>Carregando...</p>;

  const episodioCodigoFormat = episodio.codigo.replace(/^S0?(\d+)E0?(\d+)$/, "S$1 E$2");

  return (
    <div className={darkMode ? "escuro" : "claro"}>
      <div className="topo-detalhe-episodio">
        <button className="voltar-btn" onClick={() => navigate(-1)}>← Voltar</button>
        <h2 className={`episodio-titulo ${darkMode ? "escuro" : "claro"}`}>{episodio.nome}</h2>
      </div>

      <div className="episodio-main-card">
        <div className="episodio-info-quadrados">
          <div className="episodio-info-bloco">
            <span className="episodio-info-label">Código do episódio</span>
            <span className="episodio-info-valor">{episodioCodigoFormat}</span>
          </div>
          <div className="episodio-info-bloco">
            <span className="episodio-info-label">Data de exibição</span>
            <span className="episodio-info-valor">{episodio.dataExibicao}</span>
          </div>
        </div>

        <h3 className="episodio-personagens-titulo">Personagens</h3>
        <div className="episodio-personagens-grid">
          {personagemInfos.map(p => (
            <div key={p.id} className="episodio-personagem-card">
              <img src={p.image} alt={p.name} className="episodio-personagem-img" />
              <span className="episodio-personagem-nome">Nome: {p.name}</span>
              <span className="episodio-personagem-status">Status: {p.status}</span>
              <span className="episodio-personagem-localizacao">
                Última Localização:{" "}
                <span style={{ color: "#24908c" }}>
                  <b>{p.location?.name}</b>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodioDetalhes;
