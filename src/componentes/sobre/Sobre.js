import React from "react";

//importando o CSS
import './Sobre.css';

//importando a imagem
import foto from '../../assets/imgPerfil.jpg'

//importando Link para inserir a rota
import { Link } from "react-router-dom";

function Sobre () {
    return (
        <main className = "mainSobre" >
            <header className="text">
                <section>
                    <h1>Olá! Meu nome é Alícia</h1>
                    <h1>Conheça mais detalhes</h1>
                    <div className="divBotoes">
                        <button className="botao">Portfólio</button>
                        <button className="botao">
                        <Link className="link" to="/referencias">Experiências</Link>
                        </button>
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
        </main >
    )
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