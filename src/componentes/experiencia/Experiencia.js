import React from "react";
import "./Experiencia.css";
import { Link } from "react-router-dom";


export function Experiencia() {
  return (
    <main>
      <section className="divBotao">
        <button className="voltar">
          <Link className="link" to="/">
            Voltar
          </Link>
        </button>
      </section>
      <header className="text">
        <h4 className="meuTexto">Este é o componente "Experiência"</h4>
      </header>
    </main>
  );
}
