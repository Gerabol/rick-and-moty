import { useNavigate } from "react-router-dom";
import type { Episodio } from "../tipos/episodio";

interface Props {
  episodio: Episodio;
}

const CardEpisodio: React.FC<Props> = ({ episodio }) => {
  const navegar = useNavigate();

  return (
    <div onClick={() => navegar(`/episodio/${episodio.id}`)}>
      <h3>{episodio.nome}</h3>
      <p>Data de exibição: {episodio.dataExibicao}</p>
      <p>Código: {episodio.codigo}</p>
    </div>
  );
};

export default CardEpisodio;
