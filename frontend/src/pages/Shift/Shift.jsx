import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { config } from '../../env/config';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import './shift.css'

const Shift = ({shiftID}) => {
  const navigate = useNavigate()
  let {id} = useParams();
  const [shift, setShift] = useState({
    note: '',
    date: '',
    hour: ''
  });

  // DESCARGAR TURNO - `${config.webAPI}/appointments/download/${id}`
  // ELIMINAR - `${config.webAPI}/appointments/${id}`

  useEffect(() => {
    fetch(`${config.webAPI}/appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setShift({
        note: res.note,
        date: res.day,
        hour: res.hour
      })
    });
  }, [id])

  const handleDeleteShift = () => {
    console.log(`${config.webAPI}/appointments/${id}`);

    fetch(`${config.webAPI}/appointments/${id}`, { method: 'DELETE' })
    .then(() => navigate('/listado-turnos'))
  } 

  const handleDownloadShift = () => {
    fetch(`${config.webAPI}/appointments/download/5`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      // Create a URL for the Blob object
      const url = URL.createObjectURL(blob);
      // Create a link element and click it to download the file
      const link = document.createElement('a');
      link.href = url;
      link.download = 'filename.ext';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
  }

  return (
    <>
    <p className='shift-title' >DIEGO PEREZ</p>

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