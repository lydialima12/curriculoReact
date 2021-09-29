import React from 'react';
import './Input.css';
import { Link } from "react-router-dom";


export function input(props) {
    return (
        <main>
            <section className="meuForm">
                <form action="">
                    <pre><label for="nome">{props.label}</label></pre>
                    <input class="caixaTexto" type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} />
                </form>
            </section>
        </main>
    )
}

export default input;

