import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import './login.css';

const Login = () => {
  const [pass, setPass] = useState()

  const handlePassword = (e) => {
    setPass(e.target.value);
  }

  return (
    <div className='login-bg'>
      <div className="login-container">
        <div className="login-container-small">
          <Title 
            title='Gestor de Turnos'
            margin='5% 0'
          />
          <div className="login-input-box">
            <Input
              onChange={handlePassword}
              value={pass}
              type='text'
              nameProp='search'
              placeholder={'Ingrese su contraseña'}
              margin='5% 0'
            />
          </div>
          <div className="login-btn-box">
            <Button
              title={'Ingresar'} 
              type='button'
              width='30%'
              margin='5% 0'
              path='/'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login