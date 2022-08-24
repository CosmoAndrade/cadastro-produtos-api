import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../../services/api';
import { LoginService } from '../../services/login.service';
import { useNavigate } from "react-router-dom"
import { chosenProduto } from '../Editar';

import './index.css'



const Produtos = () => {
    const history = useNavigate()
    const [produtos, setProdutos] = useState([])
    const [idToDelete, setIdToDelete] = useState('')



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
        getProdutos()
    }, [])


    const handleDelete = () => {
        api.delete(`/produtos/${idToDelete}`).then((response) => {
            getProdutos()

            alert('Produto deletado com sucesso')

        })
    }


const handleEdit = (produto) => {
   chosenProduto.chosen = produto
}



    return (
        <div className='produtos'>


            <div className='d-flex justify-content-around pt-4 mb-4'>
                <h3>Listagem de Produtos</h3>

                <NavLink to="/cadastrar">
                    <button className='btn btn-success '>Cadastrar</button>
                </NavLink>


            </div>


            {produtos.map((produto, index) => {
                return (
                    <div key={index}>

                        <table className="table table-hover mx-auto w-75">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Quantidades</th>
                                    <th scope="col">Data Cadastro</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.valor}</td>
                                    <td>{produto.quantidadeEstoque}</td>
                                    <td>{produto.dataCadastro}</td>
                                    <td>
                             <button onClick={() => handleDelete(setIdToDelete(produto.id))}className='btn btn-danger btn-sm mx-2'>Delete</button>

                                        <NavLink to="/editar">
                                            <button onClick={() => handleEdit(produto)} className='btn btn-info btn-sm'>Edit</button>
                                        </NavLink>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                )
            })}

        </div>
    );
}

export default Produtos;
