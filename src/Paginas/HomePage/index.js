import "./style.css";
import { useNavigate } from "react-router-dom";
import Marca from "../../Imagens/pnglogos .png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="Header">
        <img src={Marca} alt=""></img>
      </div>
      <div className="FunçõesContainer">
        <h1>Selecione uma opção</h1>
        <div className="DuplaLabel">
          <input
            type="button"
            className="Botao"
            id="cadastrarCliente"
            onClick={() => {
              navigate("/CadastrarCliente");
            }}
          ></input>
          <label htmlFor="cadastrarCliente">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt=""
              className="Icone"
            ></img>
          </label>
          <label htmlFor="cadastrarCliente">
            <h1 className="Texto">Cadastrar novo cliente</h1>
          </label>
        </div>
        <div className="DuplaLabel">
          <input
            type="button"
            className="Botao"
            id="ListaClientes"
            onClick={() => {
              navigate("/ListaClientes");
            }}
          ></input>
          <label htmlFor="ListaClientes">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3126/3126647.png"
              alt=""
              className="Icone"
            ></img>
          </label>
          <label htmlFor="ListaClientes">
            <h1 className="Texto">Pesquisar cliente</h1>
          </label>
        </div>
        <div className="DuplaLabel">
          <input
            type="button"
            className="Botao"
            id="Financeiro"
            onClick={() => {
              navigate("/Financeiro");
            }}
          ></input>
          <label htmlFor="Financeiro">
            <img
              src="https://cdn-icons-png.flaticon.com/512/65/65780.png"
              alt=""
              className="Icone"
            ></img>
          </label>
          <label htmlFor="Financeiro">
            <h1 className="Texto">Financeiro</h1>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home;
