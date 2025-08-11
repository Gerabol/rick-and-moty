import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./paginas/Inicio";
import Personagens from "./paginas/Personagens";
import PersonagemDetalhes from "./paginas/PersonagemDetalhes";
import Episodios from "./paginas/Episodios";
import EpisodioDetalhes from "./paginas/EpisodioDetalhes";
import Cabecalho from "./componentes/Cabecalho";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Cabecalho darkMode={darkMode} setDarkMode={setDarkMode} />
      <div
        className={darkMode ? "bg-dark text-light" : "bg-white text-dark"}
        style={{ minHeight: "100vh" }}
      >
        <Routes>
          <Route path="/" element={<Inicio darkMode={darkMode} />} />
          <Route path="/personagens" element={<Personagens darkMode={darkMode} />} />
          <Route path="/personagem/:id" element={<PersonagemDetalhes darkMode={darkMode} />} />
          <Route path="/episodios" element={<Episodios darkMode={darkMode} />} />
          <Route path="/episodio/:id" element={<EpisodioDetalhes darkMode={darkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
