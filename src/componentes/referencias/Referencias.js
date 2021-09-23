import React from "react";
import './Referencias.css';

//importando Link para inserir a rota
import { Link } from "react-router-dom";


export function Referencias() {

    return (
        <main>
            <section className="divBotao">
                <button className="voltar">
                    <Link className="link" to="/">Voltar</Link>
                </button>
            </section>
            <section>
                <header className="text">
                    <h2 className="meuTextRef">Conheça um pouco das minhas Referências</h2>
                </header>
                <section className="dadosReferencias">
                    <div className="referencia">
                        <p className="nome">Antony Freitas</p>
                        <p className="contato">(81) 9 9098-0900</p>
                        <p className="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="referencia">
                        <p className="nome">Antony Freitas</p>
                        <p className="contato">(81) 9 9098-0900</p>
                        <p className="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="referencia">
                        <p className="nome">Antony Freitas</p>
                        <p className="contato">(81) 9 9098-0900</p>
                        <p className="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Referencias;