import "./style.css";
import Marca from "../../Imagens/pnglogos .png";

function Financeiro() {
  return (
    <div className="App">
      <div className="Header">
        <img src={Marca} alt=""></img>
      </div>
      <div className="ContainerFinanceiro">
        <h1 id="Financeiro">Financeiro</h1>
        <div className="Tabela">
          <div className="Retangulo"></div>
          <div className="Retangulo">Mensal</div>
          <div className="Retangulo">Trimestral</div>
          <div className="Retangulo">Semestral</div>
          <div className="Retangulo">Clientes ativos</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">Faturamento</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">Gastos</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">Lucro</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
          <div className="Retangulo">0</div>
        </div>
      </div>
    </div>
  );
}

export default Financeiro;
