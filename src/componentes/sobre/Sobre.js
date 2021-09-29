import React from "react";

//importando o CSS
import "./Sobre.css";

//importando a imagem
import foto from "../../assets/imgPerfil3.jpg";

//importando Link para inserir a rota
import { Link } from "react-router-dom";

import Botao from "../botao/Botao";

function Sobre() {
  return (
    <main>
      <header className="cabecalho">
        <section>
          <h1>Olá! Meu nome é Lydia</h1>
          <h1>Conheça mais detalhes</h1>
          <Link className="link" to="/portfolio">
            <Botao title="Portfólio" />
          </Link>

          <Link className="link" to="/referencias">
            <Botao title="Referências" />
          </Link>

          <Link className="link" to="/experiencia">
            <Botao title="Experiências" />
          </Link>

          <Link className="link" to="/contato">
            <Botao title="Contato" />
          </Link>
        </section>
        <figure>
          <img src={foto} alt={"Foto de perfil do currículo"} />
        </figure>
      </header>
    </main>
  );
}

export default Sobre;

/* <main className="mainSobre">
            <Menu />
            <header className="text">
                <section>
                    <Name.Consumer>
                        {
                            (fname) => {
                                console.log('fname: '+fname);
                                return <h1>Meu nome é {fname} </h1>;
                            }
                        }
                    
                    </Name.Consumer>
                    <h1>Conheça mais detalhes</h1>
                    <div className="divBotoes">
                        <button className="botao">Sobre mim</button>


                        <Link to="/referencias"> IR PARA Experiencia</Link>


                        <button className="botao">Experiências</button>
                        <button className="botao">Contato</button>
                        <button className="botao">Referências</button>
                    </div>
                </section>
                <section>
                    <div className="imgPerfil">
                        <figure>
                            <img src={foto} alt={"Foto de perfil do currículo"} />
                        </figure>
                    </div>
                    <div>
                        <h3 className="textSobre"></h3>
                        <p className="descricao"></p>
                    </div>
                </section>
            </header>
        </main> */
