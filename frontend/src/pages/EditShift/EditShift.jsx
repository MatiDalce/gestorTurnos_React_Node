import React from 'react';
import { useState } from 'react';
import { config } from '../../env/config';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './editShift.css';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '../../assets/helpers/toast';

const EditShift = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ patientID, setPatientID] = useState()
  const [ date, setDate ] = useState()
  const [ hour, setHour ] = useState()
  const [ notes, setNotes ] = useState()

  useEffect(() => {
    fetch(`${config.webAPI}/appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setDate(res.day);
      setHour(res.hour);
      setNotes(res.note);
      setPatientID(res.patient.id)
    })
  }, [id])

  // UPDATE: `${config.webAPI}/appointments/${id-del-turno}`
  // Parametros obligatorio: id-del-turno

  const handleDate = (e) => {
    let inputValue = e.target.value;
    setDate(inputValue)
  };

  const handleTime = (e) => {
    let inputValue = e.target.value;
    setHour(inputValue)
  };

  const handleNotes = (e) => {
    let inputValue = e.target.value;
    setNotes(inputValue)
  };

  const handleChangeShift = () => {
    let data = {
      day: 1234567891,
      hour: 1234567891,
      note: notes,
      patient: patientID
    }

    fetch(`${config.webAPI}/appointments/${id}`, { // id = id del turno
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res) {
        navigate('/listado-turnos')
        toast('success', 'Se ha editado exitosamente')
      } else {
        toast('error', 'No se ha podido editar')
      }
      setDate(res.day);
      setHour(res.hour);
      setNotes(res.note);
    })
  };

  return (
    <>
      <div className="input-row-shift">
        <div className="editShift-input-box">
          <Input
            onChange={handleDate}
            value={date}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Fecha'
            isLabelCenter
            type='date'
            nameProp='date'
          />
        </div>
        <div className="editShift-input-box">
          <Input
            onChange={handleTime}
            value={hour} // hh:mm:ss.ms
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Hora'
            isLabelCenter
            placeholder='Ingrese la hora'
            type='time'
            nameProp='hour'
          />
        </div>
      </div>
      <div className="textarea-input-shift">
        <div className="editShift-textarea-box">
          <Input
            onChange={handleNotes}
            value={notes}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Notas'
            isLabelCenter
            type='textarea'
            nameProp='notes'
          />
        </div>
      </div>
      <div className="btn-editShift-center">
        <div className='btn-editShift-container'>
          <Button 
            title={'Editar'} 
            type='button'
            onClick={handleChangeShift}
          />
        </div>
      </div>
    </>
  )
}

export default EditShift