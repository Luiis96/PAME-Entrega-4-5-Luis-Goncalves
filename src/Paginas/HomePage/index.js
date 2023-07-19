import "./style.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="Rotulos">
        <h1>Titulo Invisivel</h1>
        <div className="DuplaLabel">
          <label htmlFor="cadastrarCliente">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt=""
              className="Icone"
            ></img>
          </label>
          <label htmlFor="cadastrarCliente">
            <h1>Cadastrar novo cliente</h1>
          </label>
        </div>
        <div className="DuplaLabel">
          <label htmlFor="ListaClientes">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3126/3126647.png"
              alt=""
              className="Icone"
            ></img>
          </label>
          <label htmlFor="ListaClientes">
            <h1>Ver lista de clientes</h1>
          </label>
        </div>
        <div className="DuplaLabel">
          <label htmlFor="Financeiro">
            <img
              src="https://cdn-icons-png.flaticon.com/512/65/65780.png"
              alt=""
              className="Icone"
            ></img>
          </label>
          <label htmlFor="Financeiro">
            <h1>Financeiro</h1>
          </label>
        </div>
      </div>
      <div className="FunçõesContainer">
        <h1>Selecione uma opção</h1>
        <input
          type="button"
          className="Função"
          id="cadastrarCliente"
          onClick={() => {
            navigate("/CadastrarCliente");
          }}
        ></input>
        <input
          type="button"
          className="Função"
          id="ListaClientes"
          onClick={() => {
            navigate("/ListaClientes");
          }}
        ></input>
        <input
          type="button"
          className="Função"
          id="Financeiro"
          onClick={() => {
            navigate("/Financeiro");
          }}
        ></input>
      </div>
    </div>
  );
}

export default Home;
