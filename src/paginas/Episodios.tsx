import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../servicos/api";
import "./Episodios.css";

interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

interface EpisodiosProps {
  darkMode: boolean;
}

const Episodios = ({ darkMode }: EpisodiosProps) => {
  const navigate = useNavigate();
  const [episodios, setEpisodios] = useState<Episodio[]>([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    api.get(`/episode?page=${pagina}`).then((res) => {
      setEpisodios(res.data.results);
      setTotalPaginas(res.data.info.pages);
    });
  }, [pagina]);

  return (
    <div className={darkMode ? "escuro" : "claro"}>
      <div className="topo-detalhes">
        <button className="voltar-btn" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
        <h2 className={`episodios-titulo-lista ${darkMode ? "escuro" : "claro"}`}>
          Lista de Episódios
        </h2>
      </div>

      <div className={`episodios-grid-5col ${darkMode ? "escuro" : "claro"}`}>
        {episodios.map((ep) => {
          const temporadaCodigo = ep.episode.replace(
            /^S0?(\d+)E0?(\d+)$/,
            "S$1 E$2"
          );
          return (
            <Link
              to={`/episodio/${ep.id}`}
              key={ep.id}
              className="episodio-quadrado"
            >
              <span className="episodio-nome">{ep.name}</span>
              <span className="episodio-codigo">
                Episódio: {temporadaCodigo}
              </span>
              <span className="episodio-data">
                Data exibição: {ep.air_date}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="paginacao-episodios">
        <button
          className="paginacao-btn"
          onClick={() => setPagina((p) => Math.max(1, p - 1))}
          disabled={pagina === 1}
        >
          ← Anterior
        </button>
        <span className="paginacao-indice">
          Página {pagina} de {totalPaginas}
        </span>
        <button
          className="paginacao-btn"
          onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
          disabled={pagina === totalPaginas}
        >
          Próxima →
        </button>
      </div>
    </div>
  );
};

export default Episodios;
