import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '../../assets/helpers/toast'
import { config } from '../../env/config';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import './shift.css'
import { warningDeleteAlert } from '../../assets/helpers/customAlert';

const Shift = () => {
  const navigate = useNavigate()
  let {id} = useParams();
  const [shift, setShift] = useState({
    name: '',
    note: '',
    date: '',
    hour: ''
  });

  useEffect(() => {
    fetch(`${config.webAPI}/appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      setShift({
        name: res.patient.name,
        note: res.note,
        date: res.day,
        hour: res.hour
      })
    });
  }, [id])

  const handleDeleteShift = () => {
    warningDeleteAlert(
      `${config.webAPI}/appointments/${id}`,
      'Está por borrar un turno', 
      'Esta acción no se puede deshacer ¿Está seguro?', 
    ).then((res) => {
      if(!res) {
        toast('success', 'Turno eliminado exitosamente')
        navigate('/listado-turnos')
      } else {
        toast('error', 'No se pudo eliminar el turno')
      }
    })
  } 

  const handleDownloadShift = () => {
    fetch(`${config.webAPI}/appointments/download/${id}`)
    .then(response => {
      if (!response.ok) {
        toast('error', 'Ha ocurrido un error en la descarga')
        throw new Error('Falló la descarga');
      }
      return response.blob();
    })
    .then(blob => {
      if(blob) {
        console.log(blob);
        // Create a URL for the Blob object
        const url = URL.createObjectURL(blob);
        // Create a link element and click it to download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = `${shift.name}_${shift.date}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast('success', 'Documento descargado exitosamente');
      } else {
        toast('error', 'Ha ocurrido un error en la descarga')
      }
    })
  }

  return (
    <>
    <p className='shift-title' >{shift.name}</p>

    <div className="data-shift-box-container">
      <div className="data-shift-box">
        <p className="data-shift">Fecha del turno</p>
        <p className="data">{shift.date}</p>
      </div>

      <div className="data-shift-box">
        <p className="data-shift">Horario del turno</p>
        <p className="data">{shift.hour}hs</p>
      </div>
    </div>

    <div className="textarea-input-shift-center">
      <div className="textarea-input-box">
        <Accordion title='Notas'>
          <div className="shift-div-answer">
            <p className="shift-shift-answer">{ shift.note }</p>
          </div>
        </Accordion>
      </div>
    </div>
    <div className='btn-shift-container'>
      <div className="shift-btn-box">
        <Button 
          path={`/editar-turno/${id}`}
          title={'Editar'} 
          type='button'
        />
      </div>
      <div className="shift-btn-box">
        <Button 
          onClick={handleDownloadShift}
          title={'Descargar'} 
          type='button'
          bgColor={'var(--green-bg)'}
        />
      </div>
      <div className="shift-btn-box">
        <Button 
          title={'Borrar'} 
          type='button'
          bgColor={'var(--red-bg)'}
          onClick={handleDeleteShift}
        />
      </div>
    </div>
  </>
  )
}

export default Shift