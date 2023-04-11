import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '../../assets/helpers/toast';
import { config } from '../../env/config';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './editShift.css';
import { warningEditAlert } from '../../assets/helpers/customAlert';
import { convertISOStringtoDateTime, joinDateTimeToISOString } from '../../assets/helpers/unixtimeToSomething';

const EditShift = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ patientID, setPatientID] = useState()
  const [ date, setDate ] = useState()
  const [ hour, setHour ] = useState()
  const [ notes, setNotes ] = useState()
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState()

  useEffect(() => {
    setLoading(true)
    fetch(`${config.webAPI}/appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      if(res) {
        setDate(convertISOStringtoDateTime(res.day, 'date'));
        setHour(convertISOStringtoDateTime(res.day, 'hour'));
        setNotes(res.note);
        setPatientID(res.patient.id)
        setLoading(false)
      } else {
        toast('error', 'Algo salió mal, por favor recargue la página.')
      }
    })
  }, [id])

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

    const dateTime = (date && hour) ? joinDateTimeToISOString(date, hour) : '';

    let body = {
      day: dateTime,
      note: notes,
      patient: patientID
    }

    warningEditAlert(
      `${config.webAPI}/appointments/${id}`,
      body,
      'Esta por editar el turno',
      'Esta acción no se puede deshacer ¿Está seguro?'
    ).then(res => {
      if(!res.errors) {
        navigate('/listado-turnos')
        toast('success', 'Se ha editado exitosamente')
      } else {
        toast('error', 'No se ha podido editar')
        setError(true)
      }
    })
  };

  return (
    <>
      <div className="input-row-shift">
        <div className="editShift-input-box">
          <Input
            isDisabled={loading}
            onChange={handleDate}
            value={date}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Fecha'
            isLabelCenter
            type='date'
            nameProp='date'
          />
          { (error && !date) && <p className='addShift-error'>Este campo es requerido.</p> }
        </div>
        <div className="editShift-input-box">
          <Input
            isDisabled={loading}
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
          { (error && !hour) && <p className='addShift-error'>Este campo es requerido.</p> }
        </div>
      </div>
      <div className="textarea-input-shift">
        <div className="editShift-textarea-box">
          <Input
            isDisabled={loading}
            onChange={handleNotes}
            value={notes}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Notas'
            isLabelCenter
            type='textarea'
            nameProp='notes'
          />
          { (error && !notes) && <p className='addShift-error'>Este campo es requerido.</p> }
        </div>
      </div>
      <div className="btn-editShift-center">
        <div className='btn-editShift-container'>
          <Button 
            title={'Editar'} 
            type='button'
            onClick={handleChangeShift}
            isDisabled={loading}
          />
        </div>
      </div>
    </>
  )
}

export default EditShift