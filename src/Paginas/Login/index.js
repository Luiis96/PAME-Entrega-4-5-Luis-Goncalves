import "./style.css";
import Logo from "../../Imagens/imagem.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="Container">
        <div className="leftSide">
          <img src={Logo} alt="" className="Logo"></img>
        </div>
        <div className="Barra"></div>
        <div className="rightSide">
          <h1>Fazer login</h1>
          <input type="text" placeholder="Email" className="Preencher"></input>
          <input
            type="password"
            placeholder="Senha"
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
          <div className="FazerConta">
            <h3>Não possui uma conta?</h3>
            <label htmlFor="Cadastrar">
              <u id="Cadastro">Cadastrar</u>
            </label>
          </div>
          <input
            type="button"
            id="Cadastrar"
            onClick={() => {
              navigate("/Cadastrar");
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Login;
