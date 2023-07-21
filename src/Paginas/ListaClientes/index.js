import "./style.css";
import Marca from "../../Imagens/pnglogos .png";

function ProcurarCliente() {
  return (
    <div className="App">
      <div className="Header">
        <img src={Marca} alt=""></img>
      </div>
      <div className="ContainerBusca">
        <input
          type="text"
          placeholder="Procurar por cliente"
          className="Busca"
        ></input>
      </div>
    </div>
  );
}

export default ProcurarCliente;
