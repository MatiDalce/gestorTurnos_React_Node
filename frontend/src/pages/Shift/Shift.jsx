import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { config } from '../../env/config';
import './shift.css'

const Shift = ({shiftID}) => {
  let {id} = useParams();
  const [shift, setShift] = useState([]);

  useEffect(() => {
    // fetch(`${config.webAPI}/${shiftID}`)
    // .then(res => res.json())
    // .then(res => setShift(res));
  }, [shiftID])

  const handleDownloadTxt = () => {
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
        <p className="data">13/05/2023</p>
      </div>

      <div className="data-shift-box">
        <p className="data-shift">Horario del turno</p>
        <p className="data">19:36hs</p>
      </div>
    </div>

    <div className="textarea-input-shift-center">
      <div className="textarea-input-box">
        <Accordion title='Notas'>
          <div className="shift-div-answer">
            <p className="shift-shift-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque earum, ut officia expedita magni deleniti nulla ex id dolorum, amet asperiores numquam fugiat veritatis velit similique at repellat consectetur!
            Cumque magni fuga doloremque perferendis ullam consequatur reprehenderit minima quas repellat quo facere recusandae, placeat voluptatum ipsam ipsa, aliquid numquam illo minus animi, est harum repudiandae? Molestias dolore quaerat nostrum.
            Minus fugiat excepturi a. Ex cum temporibus odio, voluptas eius eaque. Dolorem consequuntur sunt nisi asperiores eos illum, ratione odit eius maxime quia exercitationem, sit labore facere officia laborum deleniti!</p>
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
          width='20%'
          margin='5% 0'
        />
      </div>
      <div className="shift-btn-box">
        <Button 
          onClick={handleDownloadTxt}
          title={'Descargar'} 
          type='button'
          width='20%'
          margin='5% 0'
          bgColor={'var(--green-bg)'}
        />
      </div>
      <div className="shift-btn-box">
        <Button 
          title={'Borrar'} 
          type='button'
          width='20%'
          margin='5% 0'
          bgColor={'var(--red-bg)'}
        />
      </div>
    </div>
  </>
  )
}

export default Shift