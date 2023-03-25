import React from 'react';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import './home.css';

const Home = () => {
  
  return (
    <div className='home-bg'>
      <div className="home-container">
        <div className="home-container-small">
          <Title 
            title='Bienvenido'
            margin='5% 0'
          />
          <div className="btn-welcome">
            <Button 
              title={'Pacientes'} 
              type='button'
              width='30%'
              margin='5% 0'
              path='/listado-pacientes'
            />
            <Button 
              title={'Mi Calendario'} 
              type='button'
              width='30%'
              margin='5% 0'
              path='/mi-calendario'
            />
            <Button 
              title={'Turnos'} 
              type='button'
              width='30%'
              margin='5% 0'
              path='/listado-turnos'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home