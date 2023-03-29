import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './editShift.css';

const EditShift = () => {

  const [date, setDate] = useState()
  const [hour, setHour] = useState()

  const handleDate = (e) => {
    const date = new Date(e.target.value);

  };
  const handleTime = (e) => {
  };
  const handleNotes = () => {};

  return (
    <>
      <div className="input-row-shift">
        <div className="editShift-input-box">
          <Input
            onChange={handleDate}
            value='2023-06-13'
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
            value='22:53:05' // hh:mm:ss.ms
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
            value=''
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
            width='20%'
            margin='5% 0'
          />
        </div>
      </div>
    </>
  )
}

export default EditShift