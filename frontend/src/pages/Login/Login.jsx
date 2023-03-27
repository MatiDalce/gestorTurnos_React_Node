import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import './login.css';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

const Login = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState()
  const [error, setError] = useState(false)

  const handlePassword = (e) => {
    setPass(e.target.value);
  }

  const handleCheckPassword = () => {
    if (pass !== 'contraseña123') {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 5000);
    } else {
      localStorage.setItem('auth', 'Enabled')
      navigate('/')
    }
  }

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
              onClick={handleCheckPassword}
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