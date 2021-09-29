import React from "react";
import './Botao.css';

function Botao(props) {
  return <button className="botao">{props.title}</button>;
}

export default Botao;
