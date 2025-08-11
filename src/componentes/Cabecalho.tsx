import { Link } from "react-router-dom";
import NavbarToggle from "./NavbarToggle";
import "./Cabecalho.css";

interface CabecalhoProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ darkMode, setDarkMode }) => (
  <nav className={darkMode ? "navbar bg-navbar-custom shadow" : "navbar bg-light shadow"} >
    <div className="container d-flex align-items-center justify-content-between">
      <Link className="navbar-brand" to="/">
        <img src="/img/logo.avif" alt="Rick and Morty" height={30} style={{ objectFit: "contain" }} />
      </Link>
      <div className="d-flex flex-row gap-4 align-items-center">
        <Link className="nav-link nav-custom" to="/personagens">Personagens</Link>
        <Link className="nav-link nav-custom" to="/episodios">Episódios</Link>
        <NavbarToggle darkMode={darkMode} onToggle={setDarkMode} />
      </div>
    </div>
  </nav>
);

export default Cabecalho;
