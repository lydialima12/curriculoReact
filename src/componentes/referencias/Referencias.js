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
                        <p className="nome">Luigi Sousa</p>
                        <p className="contato">(81) 9 9098-0500</p>
                        <p className="descricao">Professor universitário, fotógrafo e um eterno aprendiz da Ciência da Computação.</p>
                    </div>
                    <div className="referencia">
                        <p className="nome">Paula Ferreira</p>
                        <p className="contato">(81) 9 9098-0900</p>
                        <p className="descricao">Designer da experência do usuário, com ênfase em dispositivos móveis.</p>
                    </div>
                    <div className="referencia">
                        <p className="nome">Bartolomeu Lima</p>
                        <p className="contato">(81) 9 9258-0900</p>
                        <p className="descricao">Mestrando em Engenharia da Computação e professor da UFPE.</p>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Referencias;