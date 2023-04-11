import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { config } from '../../env/config';
import { toast } from '../../assets/helpers/toast';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import './addShift.css';

const AddShift = () => {
  const navigate = useNavigate()
  const [patientList, setPatientList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(0);
  const [date, setDate] = useState(0);
  const [hour, setHour] = useState(0);
  const [note, setNote] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.webAPI}/patients/limit`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res.length > 0) {
        const patientsListNames = res.map(patient => {return {text:patient.completeName, value:patient.id}});
        setPatientList(patientsListNames)
      }
    })
    .finally(() => setLoading(false))
  }, []);

  const handleSelectPatient = (e) => {
    setSelectedPatient(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handleTime = (e) => {
    setHour(e.target.value)
  }
  const handleNotes = (e) => {
    setNote(e.target.value)
  }
  const handleAddShift = (e) => {

    const dateTime = new Date(`${date}T${hour}`); // Creamos un objeto Date con la fecha y la hora
    const formattedDateTime = date && hour ? dateTime.toISOString() : ''; // Si date y hour existen, las formateamos como string

    let data = {
      day: formattedDateTime,
      patient: Number(selectedPatient),
      note: note
    };

    fetch(`${config.webAPI}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      if(!res.errors) {
        toast('success', 'Turno agregado exitosamente');
        navigate('/listado-turnos')
      } else {
        toast('error', 'No se pudo agregar el turno');
        setError(true)
      }
    })
  }

  return (
    <>
      <div className="select-shift-center">
        <div className="select-shift-input">
          <Select
            onChange={handleSelectPatient}
            options={[{text:'', value:0}, ...patientList]}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Seleccione el paciente'
            isLabelCenter
            nameProp='patients'
          />
          { (error && !selectedPatient) && <p className='addShift-error'>Este campo es requerido.</p> }
        </div>
      </div>
      <div className="input-row-shift">
        <div className="addShift-input-container">
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
          { (error && !date) && <p className='addShift-error'>Este campo es requerido.</p> }
        </div>
        <div className="addShift-input-container">
          <Input
            onChange={handleTime}
            value={hour}
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
        <Input
          onChange={handleNotes}
          value={note}
          colorLabel='var(--black-bg)' 
          hasLabel
          labelTitle='Notas'
          isLabelCenter
          type='textarea'
          nameProp='notes'
        />
        { (error && !note) && <p className='addShift-error'>Este campo es requerido.</p> }
      </div>
      <div className='btn-addShift-container'>
        <Button 
          title={'Agregar'} 
          type='button'
          onClick={handleAddShift}
          isDisabled={loading}
        />
      </div>
    </>
  )
}

export default AddShift