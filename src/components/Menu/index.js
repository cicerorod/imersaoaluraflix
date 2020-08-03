import React from "react";
import logo from "../../assets/img/courseflix.png";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/Cadastro/Video">
        <img className="Logo" src={logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/Cadastro/Video">
        Novo
      </Button>
    </nav>
  );
}

export default Menu;
