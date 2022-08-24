import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


import api from '../../services/api'
import { LoginService } from "../../services/login.service"
export const chosenProduto = {chosen:{}} // variavel global
 
const Editar = () => {
    const history = useNavigate()
    const [produtos, setProdutos] = useState([])
    const [valor , setValor] = useState(chosenProduto.chosen.valor)
    const [quantidadeEstoque , setQuantidadeEstoque] = useState(chosenProduto.chosen.quantidadeEstoque)
    const [idToEdit, setIdToEdit] = useState('')
    const [edit, setEdit] = useState('')

    const getProdutos = () => {

        api.get("produtos")
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




    const handleEdit = () => {

        const request = {
            valor,
            quantidadeEstoque
        }
        api.put(`produtos/${chosenProduto.chosen.id}`, request).then((response) => {
           history('/produtos')
        })
    }


    return ( 
        <div className="mx-auto w-50 mt-4">
            <h2>Editar produto</h2>
            
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Valor"
                    required
                    value={valor}
                    onChange={ e => setValor(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Quantidade"
                    required
                    value={quantidadeEstoque}
                    onChange={ e => setQuantidadeEstoque(e.target.value)}
                />
            </div>

          

        
            
            <button onClick={ handleEdit } className="btn btn-primary">Editar</button>
         
           

        </div>
     );
}
 
export default Editar;

