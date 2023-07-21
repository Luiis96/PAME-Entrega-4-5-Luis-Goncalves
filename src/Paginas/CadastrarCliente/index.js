import "./style.css";
import React, { useState } from "react";
import Marca from "../../Imagens/pnglogos .png";

function CadastrarCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [meses, setMeses] = useState(0);
  const [valor, setValor] = useState(0);
  var listClientes = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    listClientes = listClientes + [[nome, email, meses, valor]];
    console.log(listClientes);
    return listClientes;
  };
  return (
    <div className="App">
      <div className="Header">
        <img src={Marca} alt=""></img>
      </div>
      <form onSubmit={handleSubmit} className="ContainerInscrição">
        <h1>Cadastrar novo cliente</h1>
        <div className="divNome">
          <label htmlFor="Nome">
            <h4>Nome do cliente</h4>
          </label>
          <input
            type="text"
            placeholder="Nome completo"
            id="Nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          ></input>
        </div>
        <div className="Valores">
          <div className="DivValor">
            <label htmlFor="Email">
              <h4>Email</h4>
            </label>
            <input
              type="text"
              id="Email"
              placeholder="Digite o nome do cliente"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className="DivValores2">
            <label htmlFor="Números1">
              <h4>Meses</h4>
            </label>
            <input
              type="number"
              id="Números1"
              placeholder="0 Meses"
              value={meses}
              onChange={(event) => setMeses(event.target.value)}
            ></input>
          </div>
          <div className="DivValores2">
            <label htmlFor="Números2">
              <h4>Valor</h4>
            </label>
            <input
              type="number"
              id="Números2"
              placeholder="R$ 0,00"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
            ></input>
          </div>
        </div>
        <button type="submit" className="Envio">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastrarCliente;
