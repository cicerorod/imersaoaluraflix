import React from "react";
import { FooterBase } from "./styles";
import github from "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import email from "../../assets/img/email.svg";

function Footer() {
  return (
    <FooterBase>
      <h3>Cícero Rodrigues</h3>
      <div className="contact">
        <a
          href="https://github.com/cicerorod"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src={github} alt="GitHub" className="imgAlura" />
        </a>
        <a
          href="https://www.linkedin.com/in/c%C3%ADcero-rodrigues-89623784/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src={linkedin} alt="linkedin" className="imgAlura" />
        </a>
        <a
          href="mailto:cicerorod@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src={email} alt="E-mail" className="imgAlura" />
        </a>
      </div>
      <span>
        Orgulhosamente criado durante a
        <a href="https://www.alura.com.br/"> Imersão React da Alura</a>
      </span>
      <br />
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
    </FooterBase>
  );
}

export default Footer;
