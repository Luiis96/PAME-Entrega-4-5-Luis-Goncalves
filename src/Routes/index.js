import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Paginas/Login/index.js";
import Cadastro from "../Paginas/Cadastro/index.js";
import Home from "../Paginas/HomePage/index.js";
import CadastrarCliente from "../Paginas/CadastrarCliente/index.js";
import ProcurarCliente from "../Paginas/ListaClientes/index.js";
import Financeiro from "../Paginas/Financeiro/index.js";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Cadastrar" element={<Cadastro></Cadastro>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route
          path="/CadastrarCliente"
          element={<CadastrarCliente></CadastrarCliente>}
        ></Route>
        <Route
          path="/ListaClientes"
          element={<ProcurarCliente></ProcurarCliente>}
        ></Route>
        <Route path="/Financeiro" element={<Financeiro></Financeiro>}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes>
    </Router>
  );
}

export default Rotas;
