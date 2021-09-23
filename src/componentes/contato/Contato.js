import React from 'react';
import './Contato.css';

export function Contato() {
    return (
        <main>
            <header className="text">
                <h4 className="meuTexto">Entre em contato comigo!</h4>
            </header>
            <section>
                <form>
                    <label for="nome">{`Digite seu nome: \n`} </label>{'\n'} 
                    <input className="caixaInput" type="text" id="nome" name="nome"></input>
                </form>
            </section>
        </main>
    )
}