import React from "react";

import "./NavbarToggle.css";

const cinzaIcon = "/img/cinza.png";
const verdeIcon = "/img/verde.png"; 

interface NavbarToggleProps {
  darkMode: boolean;
  onToggle: (darkMode: boolean) => void;
}

const NavbarToggle: React.FC<NavbarToggleProps> = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(!darkMode)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      aria-label={darkMode ? "Desativar modo escuro" : "Ativar modo escuro"}
    >
      <div className={`lampada-animada ${darkMode ? "escuro" : "claro"}`}>
        <img
          src={darkMode ? cinzaIcon : verdeIcon}
          alt={darkMode ? "Lâmpada desligada" : "Lâmpada ligada"}
          height={30}
        />
      </div>
    </button>
  );
};

export default NavbarToggle;
