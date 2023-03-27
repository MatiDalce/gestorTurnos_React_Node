import React, { useEffect, useState } from 'react'
import './patient.css';
import Button from '../../components/Button/Button';
import { useParams } from 'react-router-dom';

const Patient = () => {
  let {id} = useParams();

  const [patient, setPatient] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/patient/${id}`)
    .then(res => res.json())
    .then(res => setPatient(res));
  }, [id])

  console.log(patient);
  
  return (
    <>
      <p className='patient-title'>{patient.name}</p>
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Nombre del Paciente</p>
          <p className="data">{patient.name}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Nombre del Paciente</p>
          <p className="data">{patient.lastname}</p>
        </div>
      </div>
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">DNI del Paciente</p>
          <p className="data">{patient.dni}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Obra Social del Paciente</p>
          <p className="data">{patient.social_network}</p>
        </div>
      </div>
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Edad</p>
          <p className="data">{patient.age} años</p>
        </div>
        <div className="input-box">
          <p className="data-title">Género</p>
          <p className="data">{patient.genre}</p>
        </div>
      </div>
      <div className='btn-patient-container'>
        <div className="btn-patient-box">
          <Button 
            path={`/editar-paciente/${id}`}
            title={'Editar'} 
            type='button'
            width='20%'
            margin='5% 2%'
          />
        </div>
        <div className="btn-patient-box">
          <Button 
            path={`/turnos-paciente/${id}`}
            title={'Ver Turnos'} 
            type='button'
            width='20%'
            margin='5% 2%'
            bgColor='var(--green-bg)'
          />
        </div>
        <div className="btn-patient-box">
          <Button 
            title={'Borrar'} 
            type='button'
            width='20%'
            margin='5% 2%'
            bgColor='var(--red-bg)'
          />
        </div>
      </div>
    </>
  )
}

export default Patient