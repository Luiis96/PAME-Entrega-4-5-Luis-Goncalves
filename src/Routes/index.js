import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Paginas/Login/index.js";
import Cadastro from "../Paginas/Cadastro/index.js";
import Home from "../Paginas/HomePage/index.js";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Cadastrar" element={<Cadastro></Cadastro>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route
          path="/CadastrarCliente"
          element={<div>Cadastrar cliente</div>}
        ></Route>
        <Route
          path="/ListaClientes"
          element={<div>Lista de clientes</div>}
        ></Route>
        <Route path="/Financeiro" element={<div>Financeiro</div>}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes>
    </Router>
  );
}

export default Rotas;
