import { BrowserRouter , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";

const RoutesApp = () => {

    return ( 
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route  path="/" element={<Login/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/cadastrar" element={<Cadastrar/>} />
                <Route path="/editar" element={<Editar/>} />
            </Routes>

        </BrowserRouter>
     );
}
 
export default RoutesApp;

