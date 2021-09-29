import React from 'react';
import './Contato.css';
import Input from '../input/Input';
import Botao from '../botao/Botao';
import { Link } from "react-router-dom";


export function Contato() {
    return (
        <main>
            <section className="divBotao">
                <button className="voltar">
                    <Link className="link" to="/">Voltar</Link>
                </button>
            </section>
            <section>
                <pre>
                    <Input label="Digite seu nome"
                        type="text"
                        placeholder="Ex: Ana" />
                </pre>
                <pre>
                    <Input label="Digite seu email"
                        type="email"
                        placeholder="Ex: ana@email.com" />
                </pre>

                <pre>
                    <Input label="Digite seu telefone"
                        type="text"
                        placeholder="Ex: (81) 9 9800-0987" />
                </pre>

            </section>
            <section className="divBotao"> 
                <button className="botaoEnviar">Enviar</button>
            </section>

        </main>
    )
}