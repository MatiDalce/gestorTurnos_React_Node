import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import './login.css';

const Login = () => {
  return (
    <div className='login-bg'>
      <div className="login-container">
        <div className="login-container-small">
          <Title 
            title='Gestor de Turnos'
            margin='5% 0'
          />
          <Input
            type='text'
            nameProp='search'
            placeholder={'Ingrese su contraseña'}
            margin='5% 0'
          />
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
  )
}

export default Login