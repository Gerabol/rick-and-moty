import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../servicos/api";
import type { Personagem } from "../tipos/personagem";
import "./PersonagemDetalhes.css";

interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;  
}

interface PersonagemDetalhesProps {
  darkMode: boolean;
}

const PersonagemDetalhes = ({ darkMode }: PersonagemDetalhesProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personagem, setPersonagem] = useState<Personagem | null>(null);
  const [episodios, setEpisodios] = useState<Episodio[]>([]);

  useEffect(() => {
    if (!id) return;

    api.get(`/character/${id}`).then((res) => {
      const p = res.data;
      setPersonagem({
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
      });

      // Busca todos episódios numa chamada
      const episodeIds = p.episode.map((url: string) => url.split('/').pop()).join(',');
      api.get(`/episode/${episodeIds}`).then(epRes => {
        let data = epRes.data;
        if (!Array.isArray(data)) data = [data];
        setEpisodios(data);
      });
    });
  }, [id]);

  if (!personagem) return <p className={darkMode ? "escuro" : "claro"}>Carregando...</p>;

  return (
    <div>
      <div className="topo-detalhes">
        <button className="voltar-btn" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
        <h2 className={`titulo-detalhes ${darkMode ? "escuro" : "claro"}`}>
          Detalhes do Personagem
        </h2>
      </div>

      <div className={`detalhes-profissional ${darkMode ? "escuro" : "claro"}`}>
        <div className="detalhes-wrapper">

          <div className="detalhes-foto">
            <img src={personagem.imagem} alt={personagem.nome} />
          </div>

          <div className="detalhes-info">
            <h2>{personagem.nome}</h2>
            <dl>
              <div>
                <dt>Status:</dt>
                <dd>{personagem.status}</dd>
              </div>
              <div>
                <dt>Espécie:</dt>
                <dd>{personagem.especie}</dd>
              </div>
              {personagem.tipo &&
                <div>
                  <dt>Tipo:</dt>
                  <dd>{personagem.tipo}</dd>
                </div>
              }
              <div>
                <dt>Gênero:</dt>
                <dd>{personagem.genero}</dd>
              </div>
              <div>
                <dt>Origem:</dt>
                <dd>{personagem.origem.nome}</dd>
              </div>
              <div>
                <dt>Localização:</dt>
                <dd>{personagem.localizacao.nome}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="episodios-quadro">
          <h3 className="episodios-titulo">Episódios em que {personagem.nome} aparece:</h3>
          <div className="episodios-grid-5col">
            {episodios.map((ep) => {

               const temporadaNumero = ep.episode.replace(/^S0?(\d+)E0?(\d+)$/, "S$1 E$2");

              let episodioCodigo = "";
              const regex = /S(\d+)E(\d+)/i;
              const match = ep.name.match(regex);
              if (match) {
                episodioCodigo = `S${match[1]} E${match[2]}`;
              }
              return (
                <div key={ep.id} className="episodio-quadrado">
                  <span className="episodio-nome">{ep.name}</span>
                  <span className="episodio-codigo">Episódio: {temporadaNumero}</span>
                  <span className="episodio-data">Data exibição: {ep.air_date}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonagemDetalhes;
