import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '../../assets/helpers/toast';
import { config } from '../../env/config';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Input from '../../components/Input/Input';
import './editShift.css';
import { convertISOStringtoDateTime, joinDateTimeToISOString } from '../../assets/helpers/unixtimeToSomething';
import Swal from 'sweetalert2';

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
    // ===== GET DEL TURNO =====
    setLoading(true)
    fetch(`${config.webAPI}/appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      if(res) {
        let date = convertISOStringtoDateTime(res.day, 'date', true)
        let hour = convertISOStringtoDateTime(res.day, 'hour')
        setDate(date);
        setHour(hour);
        setNotes(res.note);
        setPatientID(res.patient.id)
        setLoading(false)
      } else {
        toast('error', 'Algo salió mal, por favor recargue la página.')
      }
    })
  }, [id])

  // ===== MANEJADORES DE ESTADO =====
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

  // ===== MANEJADOR DEL PUT =====
  const handleChangeShift = () => {

    const dateTime = (date && hour) ? joinDateTimeToISOString(date, hour) : '';

    let body = {
      day: dateTime,
      note: notes,
      patient: patientID
    }

    Swal.fire({
      title: 'Esta por editar el turno',
      text: 'Esta acción no se puede deshacer ¿Está seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--skyblue-bg)',
      cancelButtonColor: 'var(--red-bg)',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${config.webAPI}/appointments/${id}`, { // id = id del turno
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(res => {
            if (!res.ok) {
                toast('error', 'No se ha podido editar el turno')
                setError(true)
                return Promise.reject(new Error("FALLÓ"))
            } else return res.json();
        })
        .then(res => {
          if(res) {
            navigate('/listado-turnos')
            toast('success', 'Se ha editado exitosamente')
          }
        })
      } else return null
    })

  };

  // ===== HTML =====
  if(loading) return <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%'}}><Spinner /></div>
  return (
    <>
      <div className="input-rowEdit-shift">
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