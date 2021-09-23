import React, { createContext } from "react";
import Sobre from "../componentes/sobre/Sobre";

const Name = createContext();

const Dados = () => {
    /*const informacoes = {
        pessoal: {
            nome: "Alícia Perez",
            idade: 27,
            telefone: "(98) 98765-0989",
        },

        descricao: {
            texto: "PEGOU!"
        }
    };*/
    // const informacoes = 'Lydia';
    return (
        <>
            <Name.Provider value={'Lydia'}>
                <Sobre />
            </Name.Provider>
        </>
    );
}


export default Dados;
export { Name };