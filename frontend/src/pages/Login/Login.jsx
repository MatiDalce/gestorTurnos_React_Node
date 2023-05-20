import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import { config } from '../../env/config';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  // ===== ESTADO =====
  const [pass, setPass] = useState()
  const [error, setError] = useState(false)

  // ===== MANEJADOR DE ESTADO =====
  const handlePassword = (e) => {
    setPass(e.target.value);
  }

  const handleLogin = () => {
    setError(false)
    fetch(`${config.webAPI}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({password: pass})
    })
    .then(response => response.json())
    .then(data => {
      if(data) {
        localStorage.setItem('token', JSON.stringify(data));
        navigate('/')
      } else {
        setError(true)
      }
    })
    .catch(error => {
      setError(true)
    });
  }

  // ===== HTML =====
  return (
    <div className='login-bg'>
      <div className="login-container">
        <div className="login-container-small">
          <Title 
            title='Gestor de Turnos'
          />
          <div className="login-input-box">
            <Input
              onChange={handlePassword}
              value={pass}
              type='password'
              nameProp='search'
              placeholder={'Ingrese su contraseña'}
              margin='5% 0'
            />
            { error && <ErrorMsg text='Contraseña incorrecta' />}
          </div>
          <div className="login-btn-box">
            <Button
              onClick={handleLogin}
              title={'Ingresar'} 
              type='button'
              width='30%'
              margin='5% 0'
            />
            {/* <button onClick={handleCheckPassword}>alala</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login