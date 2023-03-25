import React from 'react'
import './patient.css';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { useParams } from 'react-router-dom';

const Patient = () => {
  let {id} = useParams();

  return (
    <>
      <Title title='DIEGO PEREZ' />
      <div className="input-patiente-row">
        <div className="input-box">
          <p className="data-title">Nombre del Paciente</p>
          <p className="data">Diego</p>
        </div>
        <div className="input-box">
          <p className="data-title">Nombre del Paciente</p>
          <p className="data">Perez</p>
        </div>
      </div>
      <div className="input-patiente-row">
        <div className="input-box">
          <p className="data-title">DNI del Paciente</p>
          <p className="data">548458445</p>
        </div>
        <div className="input-box">
          <p className="data-title">Obra Social del Paciente</p>
          <p className="data">OSPERYH</p>
        </div>
      </div>
      <div className="input-patiente-row">
        <div className="input-box">
          <p className="data-title">Edad</p>
          <p className="data">37 años</p>
        </div>
        <div className="input-box">
          <p className="data-title">Género</p>
          <p className="data">Masculino</p>
        </div>
      </div>
      <div className='btn-addPatient-container'>
        <Button 
          title={'Editar'} 
          type='button'
          width='20%'
          margin='5% 2%'
        />
        <Button 
          path={`/turnos-paciente/${id}`}
          title={'Ver Turnos'} 
          type='button'
          width='20%'
          margin='5% 2%'
          bgColor='var(--green-bg)'
        />
        <Button 
          title={'Borrar'} 
          type='button'
          width='20%'
          margin='5% 2%'
          bgColor='var(--red-bg)'
        />
      </div>
    </>
  )
}

export default Patient