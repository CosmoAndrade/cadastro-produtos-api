import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom"
import { LoginService } from "../../services/login.service";

const Cadastrar = () => {
    const history = useNavigate()
    const [produtos, setProdutos] = useState([])
    const [nome, setNome] = useState('')
    const [valor , setValor] = useState('')
    const [quantidadeEstoque , setQuantidadeEstoque] = useState('')
   

  const  getAllProdutos = () => {

        api
        .get("/produtos")
        .then((response) => setProdutos(response.data))
        .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
        });

       
    }

    
    useEffect(() => {
        if(!LoginService.isLogged()){
            history('/')
            return
        }
 
    }, [])


   

    const createProdutos = () => {
           const request = {
            nome,
            valor,
            quantidadeEstoque,
            dataCadastro:new Date().toISOString()
           }

           api.post("produtos" , request)
              .then((reponse) => {
                history('/produtos')
              })
            
    }


    return (
        <div className="mx-auto w-50 mt-4">
            <h2>Cadastrar novo produto</h2>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Nome"
                    required
                    value={ nome}
                    onChange={ e => setNome(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Valor"
                    required
                    value={ valor}
                    onChange={ e => setValor(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Quantidade"
                    required
                    value={ quantidadeEstoque }
                    onChange={ e => setQuantidadeEstoque(e.target.value)}
                />
            </div>

            

        
            
            <button onClick={createProdutos } className="btn btn-primary">Editar</button>
          
           
        </div>
    );
}

export default Cadastrar;

