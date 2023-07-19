import "./style.css";
import "./style.css";
import Nome from "../../Imagens/imagem.png";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="Container">
        <div className="leftSide">
          <img
            //Logo escolhida apenas para visualizar melhor o site durante sua construção
            src="data:image/png;base64,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"
            alt=""
            className="Logo"
          ></img>
          <img src={Nome} alt="" className="Nome"></img>
        </div>
        <div className="Barra"></div>
        <div className="rightSide">
          <h1>Fazer Cadastro</h1>
          <input
            type="text"
            placeholder="Escolha seu nome de usuário"
            className="Preencher"
          ></input>
          <input
            type="password"
            placeholder="Escolha sua senha"
            className="Preencher"
          ></input>
          <input
            type="submit"
            placeholder="Enviar"
            className="Enviar"
            onClick={() => {
              navigate("/Home");
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
