import { useNavigate } from "react-router-dom"
import { LoginService } from "../../services/login.service"
import './index.css'

const Header = () => {
    const history = useNavigate()

    const handleExit = () => {
        LoginService.setLogged(false)

        history('/')
    }

    return (
        <div className='header'>
            <h1>Dev</h1>
        
           <button onClick={handleExit} className='btn btn-danger'>Sair</button>
       
          
           
        </div>
    );
}

export default Header;

