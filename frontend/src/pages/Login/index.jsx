import { useState } from 'react';

import { LoginService } from '../../services/login.service';
import { useNavigate } from "react-router-dom"
import './index.css'

const Login = () => {
    const history = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = () => {
        if(email === 'cosmo@email.com' && password === '1234'){
            LoginService.setLogged(true)
        }

        if(LoginService.isLogged()){
            history('/produtos')
        }
    }



    return (
        <div className="login">
            <div className="form">
                <input className='form-control' type="email" placeholder='Digite seu email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}

                />
                <input className='form-control' type="password" placeholder='Digite sua senha'
                    value={password}
                    onChange={e => setPassword(e.target.value)}

                />

                <button onClick={handleLogin}>Entrar</button>


            </div>

        </div>
    );
}

export default Login;
