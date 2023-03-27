import React from 'react'
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './shift.css'

const Shift = () => {
  let {id} = useParams();
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
        <Input
          value=''
          isDisabled
          colorLabel='var(--black-bg)' 
          hasLabel
          labelTitle='Notas'
          isLabelCenter
          type='textarea'
          nameProp='notes'
          inputWidth='80%'
        />
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