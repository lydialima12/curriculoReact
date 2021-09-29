import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";


function Portfolio() {
  return (
    <main>
      <section className="divBotao">
        <button className="voltar">
          <Link className="link" to="/">
            Voltar
          </Link>
        </button>
      </section>
      <header>
        <p className="texto">Este é o componente Portfólio</p>
      </header>
    </main>
  );
}

export default Portfolio;
