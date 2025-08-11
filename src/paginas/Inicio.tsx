import './inicio.css';

interface InicioProps {
  darkMode: boolean;
}

const Inicio = ({ darkMode }: InicioProps) => (
  <div className= {darkMode ? "hbo-background bg-dark text-light" : "hbo-background bg-white text-dark"}>
    <div className="textos-esquerda">
      <img 
        src="/img/logo.avif" 
        alt="Rick and Morty Logo" 
        className="logo-inicio" 
      />
      <p className="descricao-inicio">
        Trabalho para a pós graduação em Desenvolvimento de Aplicações Web - Unipê Cruzeiro do Sul
      </p>
      <p className="aluno-inicio">
        ALUNO: GERALDO VALENCIA
      </p>
    </div>
  </div>
);

export default Inicio;
